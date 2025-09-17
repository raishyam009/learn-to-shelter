import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock, Star, Award, ChevronRight } from 'lucide-react';
import EmergencyModuleCard, { EmergencyModule } from '@/components/EmergencyModuleCard';

const Learn: React.FC = () => {
  const [modules] = useState<EmergencyModule[]>([
    {
      id: '1',
      type: 'fire',
      title: 'Fire Safety & Prevention',
      description: 'Master fire safety procedures, prevention techniques, evacuation routes, and proper use of fire extinguishers.',
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
      description: 'Learn Drop, Cover, and Hold procedures, building safety assessment, and post-earthquake protocols.',
      progress: 100,
      totalLessons: 6,
      completedLessons: 6,
      estimatedTime: '30 min',
      isCompleted: true
    },
    {
      id: '3',
      type: 'flood',
      title: 'Flood & Water Emergency',
      description: 'Understand flood risks, water safety measures, evacuation procedures, and emergency supplies.',
      progress: 25,
      totalLessons: 7,
      completedLessons: 2,
      estimatedTime: '40 min',
      isCompleted: false
    },
    {
      id: '4',
      type: 'medical',
      title: 'Medical Emergency Response',
      description: 'Basic first aid, CPR techniques, emergency medical procedures, and when to call for help.',
      progress: 0,
      totalLessons: 10,
      completedLessons: 0,
      estimatedTime: '60 min',
      isCompleted: false
    }
  ]);

  const completedModules = modules.filter(m => m.isCompleted).length;
  const totalProgress = modules.reduce((sum, m) => sum + m.progress, 0) / modules.length;

  const achievements = [
    {
      title: 'Fire Safety Expert',
      description: 'Completed fire safety training',
      earned: true,
      icon: '🔥'
    },
    {
      title: 'Earthquake Prepared',
      description: 'Mastered earthquake response',
      earned: true,
      icon: '🌍'
    },
    {
      title: 'Water Safety Champion',
      description: 'Complete flood preparedness',
      earned: false,
      icon: '🌊'
    },
    {
      title: 'Medical Responder',
      description: 'Master first aid techniques',
      earned: false,
      icon: '🏥'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Emergency Preparedness Learning
          </h1>
          <p className="text-muted-foreground">
            Interactive training modules to keep you prepared for any emergency
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="gradient-primary text-primary-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="h-8 w-8 opacity-80" />
                <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                  {completedModules}/{modules.length}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold mb-1">Modules Completed</h3>
              <p className="text-primary-foreground/80 text-sm">
                Great progress on your safety training
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Clock className="h-8 w-8 text-alert-info" />
                <span className="text-2xl font-bold text-foreground">
                  {Math.round(totalProgress)}%
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Overall Progress</h3>
              <Progress value={totalProgress} className="h-2 mb-2" />
              <p className="text-muted-foreground text-sm">
                Keep learning to stay prepared
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Award className="h-8 w-8 text-alert-success" />
                <span className="text-2xl font-bold text-foreground">
                  {achievements.filter(a => a.earned).length}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Achievements</h3>
              <p className="text-muted-foreground text-sm">
                Badges earned for completed modules
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Learning Modules */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Training Modules</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Click on any module to start or continue your training
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {modules.map((module) => (
                    <EmergencyModuleCard key={module.id} module={module} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                      achievement.earned
                        ? 'bg-alert-success/10 border-alert-success/20'
                        : 'bg-muted/50 border-muted'
                    }`}
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className={`font-medium text-sm ${
                        achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.earned && (
                      <div className="text-alert-success">
                        <Award className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Study Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-1">💡 Practice Regularly</p>
                  <p className="text-xs text-muted-foreground">
                    Review modules monthly to maintain readiness
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-1">👥 Share Knowledge</p>
                  <p className="text-xs text-muted-foreground">
                    Discuss procedures with family and colleagues
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-1">🎯 Stay Updated</p>
                  <p className="text-xs text-muted-foreground">
                    Check for new content and safety updates
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

export default Learn;