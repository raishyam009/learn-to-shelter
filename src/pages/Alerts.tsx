import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { AlertTriangle, Plus, Send, Users, Clock, MapPin } from 'lucide-react';
import AlertCard, { Alert } from '@/components/AlertCard';
import { useToast } from '@/hooks/use-toast';

const Alerts: React.FC = () => {
  const { toast } = useToast();
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'critical',
      title: 'Fire Alarm - Building A',
      message: 'Fire alarm activated in Building A, second floor. All personnel must evacuate immediately via nearest emergency exit.',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      isActive: true,
      location: 'Building A - 2nd Floor'
    },
    {
      id: '2',
      type: 'warning',
      title: 'Severe Weather Alert',
      message: 'Tornado watch issued for the area. Move to designated storm shelters and avoid windows.',
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
      isActive: true,
      location: 'All Buildings'
    },
    {
      id: '3',
      type: 'info',
      title: 'Scheduled Fire Drill',
      message: 'Monthly fire drill scheduled for tomorrow at 10:00 AM. Please review evacuation procedures.',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      isActive: true,
      location: 'All Buildings'
    },
    {
      id: '4',
      type: 'success',
      title: 'All Clear - Building A',
      message: 'Fire department has cleared Building A. Normal operations may resume.',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
      isActive: false,
      location: 'Building A'
    }
  ]);

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newAlert, setNewAlert] = useState({
    type: 'info' as Alert['type'],
    title: '',
    message: '',
    location: ''
  });

  const handleCreateAlert = () => {
    if (!newAlert.title || !newAlert.message) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }

    const alert: Alert = {
      id: Date.now().toString(),
      type: newAlert.type,
      title: newAlert.title,
      message: newAlert.message,
      timestamp: new Date(),
      isActive: true,
      location: newAlert.location || undefined
    };

    setAlerts(prev => [alert, ...prev]);
    setNewAlert({ type: 'info', title: '', message: '', location: '' });
    setIsCreateDialogOpen(false);

    toast({
      title: 'Alert Created',
      description: 'Emergency alert has been sent to all users.',
    });
  };

  const handleDeactivateAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, isActive: false } : alert
    ));
    toast({
      title: 'Alert Deactivated',
      description: 'The alert has been deactivated and marked as resolved.',
    });
  };

  const activeAlerts = alerts.filter(alert => alert.isActive);
  const recentAlerts = alerts.filter(alert => !alert.isActive);

  const alertStats = [
    {
      label: 'Active Alerts',
      value: activeAlerts.length,
      color: activeAlerts.some(a => a.type === 'critical') ? 'text-alert-critical' : 'text-alert-warning'
    },
    {
      label: 'Critical',
      value: activeAlerts.filter(a => a.type === 'critical').length,
      color: 'text-alert-critical'
    },
    {
      label: 'Warnings',
      value: activeAlerts.filter(a => a.type === 'warning').length,
      color: 'text-alert-warning'
    },
    {
      label: 'Info',
      value: activeAlerts.filter(a => a.type === 'info').length,
      color: 'text-alert-info'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Alert Management System
            </h1>
            <p className="text-muted-foreground">
              Create, manage, and monitor emergency alerts for the school community
            </p>
          </div>
          
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-alert-critical hover:bg-alert-critical/90 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Alert
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create Emergency Alert</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="alert-type">Alert Type</Label>
                  <Select value={newAlert.type} onValueChange={(value: Alert['type']) => 
                    setNewAlert(prev => ({ ...prev, type: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical Emergency</SelectItem>
                      <SelectItem value="warning">Warning</SelectItem>
                      <SelectItem value="info">Information</SelectItem>
                      <SelectItem value="success">All Clear</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="alert-title">Alert Title</Label>
                  <Input
                    id="alert-title"
                    value={newAlert.title}
                    onChange={(e) => setNewAlert(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Brief alert title"
                  />
                </div>
                
                <div>
                  <Label htmlFor="alert-message">Message</Label>
                  <Textarea
                    id="alert-message"
                    value={newAlert.message}
                    onChange={(e) => setNewAlert(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Detailed alert message with instructions"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="alert-location">Location (Optional)</Label>
                  <Input
                    id="alert-location"
                    value={newAlert.location}
                    onChange={(e) => setNewAlert(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Specific location or 'All Buildings'"
                  />
                </div>
                
                <div className="flex space-x-2 pt-4">
                  <Button onClick={handleCreateAlert} className="flex-1">
                    <Send className="h-4 w-4 mr-2" />
                    Send Alert
                  </Button>
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Alert Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {alertStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Alerts */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Active Alerts</span>
                  </div>
                  <Badge variant={activeAlerts.some(a => a.type === 'critical') ? 'destructive' : 'secondary'}>
                    {activeAlerts.length} Active
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeAlerts.length > 0 ? (
                  activeAlerts.map((alert) => (
                    <div key={alert.id} className="space-y-2">
                      <AlertCard alert={alert} />
                      <div className="flex justify-end space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDeactivateAlert(alert.id)}
                        >
                          Mark Resolved
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit Alert
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No active alerts</p>
                    <p className="text-sm text-muted-foreground">All systems operating normally</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Alerts History */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Recent Alert History</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAlerts.slice(0, 5).map((alert) => (
                  <AlertCard key={alert.id} alert={alert} />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Alert Management Tools */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Send Test Alert
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MapPin className="h-4 w-4 mr-2" />
                  Location-Based Alert
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  Schedule Drill
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Emergency Protocols
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alert Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-alert-critical/10 rounded-lg">
                  <p className="text-sm font-medium mb-1 text-alert-critical">🚨 Critical</p>
                  <p className="text-xs text-muted-foreground">
                    Immediate danger requiring evacuation or shelter
                  </p>
                </div>
                <div className="p-3 bg-alert-warning/10 rounded-lg">
                  <p className="text-sm font-medium mb-1 text-alert-warning">⚠️ Warning</p>
                  <p className="text-xs text-muted-foreground">
                    Potential hazard requiring precautionary measures
                  </p>
                </div>
                <div className="p-3 bg-alert-info/10 rounded-lg">
                  <p className="text-sm font-medium mb-1 text-alert-info">ℹ️ Information</p>
                  <p className="text-xs text-muted-foreground">
                    Important updates and scheduled activities
                  </p>
                </div>
                <div className="p-3 bg-alert-success/10 rounded-lg">
                  <p className="text-sm font-medium mb-1 text-alert-success">✅ All Clear</p>
                  <p className="text-xs text-muted-foreground">
                    Emergency resolved, normal operations resumed
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;