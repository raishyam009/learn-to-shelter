import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Phone, 
  AlertTriangle, 
  Users, 
  Navigation, 
  Clock,
  Download,
  Share
} from 'lucide-react';
import evacuationHero from '@/assets/evacuation-hero.png';

const EmergencyPlan: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState('ground');

  const emergencyContacts = [
    {
      category: 'Primary Emergency',
      contacts: [
        { name: 'Emergency Services', number: '911', description: 'Fire, Police, Medical' },
        { name: 'Campus Security', number: '(555) 123-4567', description: '24/7 Campus Safety' },
        { name: 'Facilities Management', number: '(555) 123-4568', description: 'Building Issues' }
      ]
    },
    {
      category: 'Medical Emergency',
      contacts: [
        { name: 'School Nurse', number: '(555) 123-4569', description: 'On-campus medical' },
        { name: 'Nearest Hospital', number: '(555) 987-6543', description: 'St. Mary Medical Center' },
        { name: 'Poison Control', number: '1-800-222-1222', description: '24/7 Poison Help' }
      ]
    },
    {
      category: 'Support Services',
      contacts: [
        { name: 'Crisis Counseling', number: '(555) 123-4570', description: 'Psychological support' },
        { name: 'Family Liaison', number: '(555) 123-4571', description: 'Family communication' },
        { name: 'Media Relations', number: '(555) 123-4572', description: 'Information updates' }
      ]
    }
  ];

  const assemblyPoints = [
    {
      id: 'main',
      name: 'Main Assembly Point',
      location: 'East Parking Lot',
      capacity: '500+ people',
      features: ['First Aid Station', 'PA System', 'Weather Protection'],
      buildings: ['Main Building', 'Library', 'Cafeteria']
    },
    {
      id: 'secondary',
      name: 'Secondary Assembly Point',
      location: 'Athletic Field',
      capacity: '300+ people',
      features: ['Emergency Supplies', 'Communication Hub'],
      buildings: ['Gymnasium', 'Science Building']
    },
    {
      id: 'alternate',
      name: 'Alternate Assembly Point',
      location: 'West Courtyard',
      capacity: '200+ people',
      features: ['Covered Area', 'Medical Kit'],
      buildings: ['Arts Building', 'Administration']
    }
  ];

  const evacuationProcedures = [
    {
      step: 1,
      title: 'Alert Recognition',
      description: 'Listen for alarm signals and emergency announcements',
      actions: ['Stop current activity', 'Listen for instructions', 'Stay calm']
    },
    {
      step: 2,
      title: 'Immediate Actions',
      description: 'Take immediate safety measures based on emergency type',
      actions: ['Follow Drop/Cover/Hold for earthquakes', 'Exit immediately for fires', 'Shelter in place if directed']
    },
    {
      step: 3,
      title: 'Evacuation Route',
      description: 'Use designated evacuation routes to reach assembly points',
      actions: ['Use nearest safe exit', 'Do not use elevators', 'Help others if safely possible']
    },
    {
      step: 4,
      title: 'Assembly & Accountability',
      description: 'Report to designated assembly point for headcount',
      actions: ['Report to area supervisor', 'Stay in assigned group', 'Wait for all-clear signal']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Emergency Action Plan
              </h1>
              <p className="text-muted-foreground">
                Complete emergency procedures, contacts, and evacuation information
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share Plan
              </Button>
            </div>
          </div>
          
          {/* Emergency Status Banner */}
          <Card className="status-safe border-alert-success/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-alert-success rounded-full animate-pulse"></div>
                </div>
                <div>
                  <p className="font-medium text-white">Normal Operations</p>
                  <p className="text-sm text-white/90">No active emergencies • Last updated: Just now</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="evacuation" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="evacuation">Evacuation Plan</TabsTrigger>
            <TabsTrigger value="contacts">Emergency Contacts</TabsTrigger>
            <TabsTrigger value="procedures">Procedures</TabsTrigger>
            <TabsTrigger value="assembly">Assembly Points</TabsTrigger>
          </TabsList>

          {/* Evacuation Plan Tab */}
          <TabsContent value="evacuation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Campus Evacuation Map</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <img 
                    src={evacuationHero} 
                    alt="Campus evacuation map showing emergency exits and assembly points" 
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-alert-success/10 rounded-lg">
                    <div className="w-4 h-4 bg-alert-success rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">Emergency Exits</p>
                      <p className="text-xs text-muted-foreground">Green markers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-alert-info/10 rounded-lg">
                    <div className="w-4 h-4 bg-alert-info rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">Assembly Points</p>
                      <p className="text-xs text-muted-foreground">Blue markers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-alert-critical/10 rounded-lg">
                    <div className="w-4 h-4 bg-alert-critical rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">Fire Equipment</p>
                      <p className="text-xs text-muted-foreground">Red markers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Emergency Contacts Tab */}
          <TabsContent value="contacts" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {emergencyContacts.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.contacts.map((contact, contactIndex) => (
                      <div key={contactIndex} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-sm">{contact.name}</h4>
                          <Button variant="outline" size="sm" className="h-8">
                            <Phone className="h-3 w-3 mr-1" />
                            Call
                          </Button>
                        </div>
                        <p className="text-lg font-mono text-primary mb-1">{contact.number}</p>
                        <p className="text-xs text-muted-foreground">{contact.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Procedures Tab */}
          <TabsContent value="procedures" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Navigation className="h-5 w-5" />
                  <span>Emergency Response Procedures</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {evacuationProcedures.map((procedure, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          {procedure.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{procedure.title}</h3>
                        <p className="text-muted-foreground mb-3">{procedure.description}</p>
                        <ul className="space-y-1">
                          {procedure.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-center space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assembly Points Tab */}
          <TabsContent value="assembly" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {assemblyPoints.map((point, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>{point.name}</span>
                    </CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {point.capacity}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium text-sm mb-1">Location</p>
                      <p className="text-muted-foreground">{point.location}</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-sm mb-2">Features</p>
                      <div className="space-y-1">
                        {point.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-alert-success rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-sm mb-2">Assigned Buildings</p>
                      <div className="flex flex-wrap gap-1">
                        {point.buildings.map((building, buildingIndex) => (
                          <Badge key={buildingIndex} variant="secondary" className="text-xs">
                            {building}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EmergencyPlan;