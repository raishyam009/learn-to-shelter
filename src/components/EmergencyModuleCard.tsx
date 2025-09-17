import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Flame, Zap, Waves, Heart, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface EmergencyModule {
  id: string;
  type: 'fire' | 'earthquake' | 'flood' | 'medical';
  title: string;
  description: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  estimatedTime: string;
  isCompleted: boolean;
}

interface EmergencyModuleCardProps {
  module: EmergencyModule;
}

const EmergencyModuleCard: React.FC<EmergencyModuleCardProps> = ({ module }) => {
  const getModuleIcon = () => {
    switch (module.type) {
      case 'fire':
        return <Flame className="h-6 w-6" />;
      case 'earthquake':
        return <Zap className="h-6 w-6" />;
      case 'flood':
        return <Waves className="h-6 w-6" />;
      case 'medical':
        return <Heart className="h-6 w-6" />;
      default:
        return <Flame className="h-6 w-6" />;
    }
  };

  const getModuleStyles = () => {
    switch (module.type) {
      case 'fire':
        return 'module-fire hover:shadow-lg hover:shadow-emergency-fire/10';
      case 'earthquake':
        return 'module-earthquake hover:shadow-lg hover:shadow-emergency-earthquake/10';
      case 'flood':
        return 'module-flood hover:shadow-lg hover:shadow-emergency-flood/10';
      case 'medical':
        return 'module-medical hover:shadow-lg hover:shadow-emergency-medical/10';
      default:
        return 'module-fire hover:shadow-lg';
    }
  };

  const getIconColor = () => {
    switch (module.type) {
      case 'fire':
        return 'text-emergency-fire';
      case 'earthquake':
        return 'text-emergency-earthquake';
      case 'flood':
        return 'text-emergency-flood';
      case 'medical':
        return 'text-emergency-medical';
      default:
        return 'text-emergency-fire';
    }
  };

  return (
    <Link to={`/learn/${module.type}`}>
      <Card className={cn(
        "transition-all duration-200 hover:-translate-y-1 cursor-pointer",
        getModuleStyles()
      )}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={cn("p-2 rounded-lg bg-background/50", getIconColor())}>
                {getModuleIcon()}
              </div>
              <div>
                <CardTitle className="text-lg">{module.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {module.completedLessons}/{module.totalLessons} lessons • {module.estimatedTime}
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground mb-4">
            {module.description}
          </p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{Math.round(module.progress)}%</span>
            </div>
            <Progress 
              value={module.progress} 
              className="h-2"
            />
          </div>

          {module.isCompleted && (
            <div className="mt-3 flex items-center text-sm text-alert-success">
              ✓ Module completed
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default EmergencyModuleCard;