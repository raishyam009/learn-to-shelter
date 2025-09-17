import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, TrendingUp, Bell, MapPin } from 'lucide-react';
import AlertCard, { Alert } from '@/components/AlertCard';
import EmergencyModuleCard, { EmergencyModule } from '@/components/EmergencyModuleCard';
import { useToast } from '@/hooks/use-toast';

const Dashboard: React.FC = () => {
  const { toast } = useToast();
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'info',
      title: 'Fire Drill Scheduled',
      message: 'Monthly fire drill scheduled for tomorrow at 10:00 AM. Please review evacuation procedures.',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      isActive: true,
      location: 'All Buildings'
    },
    {
      id: '2',
      type: 'success',
      title: 'Safety Training Complete',
      message: 'Congratulations! You have completed the Fire Safety module.',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      isActive: false
    }
  ]);

  const [modules] = useState<EmergencyModule[]>([
    {
      id: '1',
      type: 'fire',
      title: 'Fire Safety',
      description: 'Learn essential fire safety procedures, evacuation routes, and prevention techniques.',
      progress: 75,
      totalLessons: 8,
      completedLessons: 6,
      estimatedTime: '45 min',
      isCompleted: false
    },
    {
      id: '2',
      type: 'earthquake',
      title: 'Earthquake Response',
      description: 'Understand how to respond during earthquakes, including drop, cover, and hold procedures.',
      progress: 100,
      totalLessons: 6,
      completedLessons: 6,
      estimatedTime: '30 min',
      isCompleted: true
    },
    {
      id: '3',
      type: 'flood',
      title: 'Flood Preparedness',
      description: 'Learn about flood risks, evacuation procedures, and water safety measures.',
      progress: 25,
      totalLessons: 7,
      completedLessons: 2,
      estimatedTime: '40 min',
      isCompleted: false
    }
  ]);

  const handleDismissAlert = (alertId: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== alertId));
    toast({
      title: 'Alert dismissed',
      description: 'The alert has been removed from your dashboard.',
    });
  };

  const stats = [
    {
      title: 'Modules Completed',
      value: modules.filter(m => m.isCompleted).length,
      total: modules.length,
      icon: TrendingUp,
      color: 'text-alert-success'
    },
    {
      title: 'Next Drill',
      value: 'Tomorrow',
      subtitle: '10:00 AM',
      icon: Calendar,
      color: 'text-alert-info'
    },
    {
      title: 'Active Alerts',
      value: alerts.filter(a => a.isActive).length,
      icon: Bell,
      color: 'text-alert-warning'
    },
    {
      title: 'Safety Score',
      value: '92%',
      subtitle: 'Excellent',
      icon: Users,
      color: 'text-alert-success'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Emergency Preparedness Dashboard
          </h1>
          <p className="text-muted-foreground">
            Stay informed and prepared with real-time alerts and training progress
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="slide-in-up">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {stat.title}
                      </p>
                      <div className="flex items-baseline space-x-1">
                        <p className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </p>
                        {stat.total && (
                          <span className="text-sm text-muted-foreground">
                            /{stat.total}
                          </span>
                        )}
                      </div>
                      {stat.subtitle && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {stat.subtitle}
                        </p>
                      )}
                    </div>
                    <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Alerts */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Active Alerts</span>
                  <Badge variant="secondary" className="ml-auto">
                    {alerts.filter(a => a.isActive).length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {alerts.length > 0 ? (
                  alerts.map((alert) => (
                    <AlertCard
                      key={alert.id}
                      alert={alert}
                      onDismiss={handleDismissAlert}
                      showDismiss={true}
                    />
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No active alerts</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <MapPin className="h-4 w-4 mr-2" />
                  View Evacuation Map
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  Practice Emergency Procedures
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Emergency Contacts
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Bell className="h-4 w-4 mr-2" />
                  Report Safety Concern
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
              <p className="text-sm text-muted-foreground">
                Complete your emergency preparedness training modules
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module) => (
                  <EmergencyModuleCard key={module.id} module={module} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;