import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Clock, 
  Users, 
  BookOpen,
  Flame,
  Zap,
  Waves,
  Heart,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const LearningModule: React.FC = () => {
  const { moduleType } = useParams();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([0, 1, 2]);

  const moduleData = {
    fire: {
      title: 'Fire Safety & Prevention',
      icon: Flame,
      color: 'text-emergency-fire',
      bgColor: 'module-fire',
      description: 'Master essential fire safety procedures, prevention techniques, and evacuation protocols.',
      estimatedTime: '45 minutes',
      totalLessons: 8,
      lessons: [
        {
          id: 0,
          title: 'Fire Basics & Triangle of Fire',
          duration: '5 min',
          type: 'video',
          description: 'Understanding how fires start and what they need to survive'
        },
        {
          id: 1,
          title: 'Types of Fire Extinguishers',
          duration: '7 min',
          type: 'interactive',
          description: 'Learn about different extinguisher types and their proper uses'
        },
        {
          id: 2,
          title: 'Evacuation Procedures',
          duration: '8 min',
          type: 'video',
          description: 'Step-by-step evacuation procedures and emergency exits'
        },
        {
          id: 3,
          title: 'Stop, Drop, and Roll',
          duration: '5 min',
          type: 'practice',
          description: 'Practice the essential technique for when clothes catch fire'
        },
        {
          id: 4,
          title: 'Fire Prevention at Home',
          duration: '6 min',
          type: 'reading',
          description: 'Common fire hazards and prevention strategies'
        },
        {
          id: 5,
          title: 'Smoke Detection Systems',
          duration: '5 min',
          type: 'video',
          description: 'Understanding smoke alarms and detection systems'
        },
        {
          id: 6,
          title: 'Emergency Communication',
          duration: '4 min',
          type: 'interactive',
          description: 'How to call for help and communicate during emergencies'
        },
        {
          id: 7,
          title: 'Final Assessment',
          duration: '5 min',
          type: 'quiz',
          description: 'Test your knowledge with a comprehensive quiz'
        }
      ]
    },
    earthquake: {
      title: 'Earthquake Response',
      icon: Zap,
      color: 'text-emergency-earthquake',
      bgColor: 'module-earthquake',
      description: 'Learn essential earthquake response techniques and safety procedures.',
      estimatedTime: '30 minutes',
      totalLessons: 6,
      lessons: [
        {
          id: 0,
          title: 'Understanding Earthquakes',
          duration: '6 min',
          type: 'video',
          description: 'What causes earthquakes and how they affect buildings'
        },
        {
          id: 1,
          title: 'Drop, Cover, and Hold',
          duration: '8 min',
          type: 'practice',
          description: 'Master the essential earthquake response technique'
        },
        {
          id: 2,
          title: 'Safe Spots and Danger Zones',
          duration: '5 min',
          type: 'interactive',
          description: 'Identify safe locations and areas to avoid during earthquakes'
        },
        {
          id: 3,
          title: 'After the Shaking Stops',
          duration: '6 min',
          type: 'video',
          description: 'Post-earthquake safety procedures and building assessment'
        },
        {
          id: 4,
          title: 'Emergency Kit Preparation',
          duration: '4 min',
          type: 'reading',
          description: 'Essential supplies for earthquake preparedness'
        },
        {
          id: 5,
          title: 'Assessment Quiz',
          duration: '5 min',
          type: 'quiz',
          description: 'Test your earthquake response knowledge'
        }
      ]
    },
    flood: {
      title: 'Flood & Water Emergency',
      icon: Waves,
      color: 'text-emergency-flood',
      bgColor: 'module-flood',
      description: 'Comprehensive flood preparedness and water safety procedures.',
      estimatedTime: '40 minutes',
      totalLessons: 7,
      lessons: [
        {
          id: 0,
          title: 'Types of Flooding',
          duration: '6 min',
          type: 'video',
          description: 'Understanding different flood types and their dangers'
        },
        {
          id: 1,
          title: 'Flood Warning Systems',
          duration: '5 min',
          type: 'interactive',
          description: 'Recognizing flood warnings and alert systems'
        },
        {
          id: 2,
          title: 'Evacuation Planning',
          duration: '8 min',
          type: 'video',
          description: 'Creating and executing flood evacuation plans'
        },
        {
          id: 3,
          title: 'Water Safety Rules',
          duration: '6 min',
          type: 'reading',
          description: 'Essential rules for staying safe around flood water'
        },
        {
          id: 4,
          title: 'Emergency Supplies',
          duration: '5 min',
          type: 'interactive',
          description: 'Flood emergency kit essentials and storage'
        },
        {
          id: 5,
          title: 'Recovery and Cleanup',
          duration: '6 min',
          type: 'video',
          description: 'Safe procedures for post-flood cleanup and recovery'
        },
        {
          id: 6,
          title: 'Final Assessment',
          duration: '4 min',
          type: 'quiz',
          description: 'Comprehensive flood preparedness quiz'
        }
      ]
    },
    medical: {
      title: 'Medical Emergency Response',
      icon: Heart,
      color: 'text-emergency-medical',
      bgColor: 'module-medical',
      description: 'Essential first aid and medical emergency response training.',
      estimatedTime: '60 minutes',
      totalLessons: 10,
      lessons: [
        {
          id: 0,
          title: 'Emergency Assessment',
          duration: '6 min',
          type: 'video',
          description: 'How to assess emergency situations and prioritize care'
        },
        {
          id: 1,
          title: 'Calling for Help',
          duration: '4 min',
          type: 'interactive',
          description: 'When and how to call emergency services effectively'
        },
        {
          id: 2,
          title: 'CPR Basics',
          duration: '10 min',
          type: 'practice',
          description: 'Hands-on CPR training and chest compression techniques'
        },
        {
          id: 3,
          title: 'Choking Response',
          duration: '6 min',
          type: 'practice',
          description: 'Heimlich maneuver and choking first aid'
        },
        {
          id: 4,
          title: 'Bleeding Control',
          duration: '8 min',
          type: 'video',
          description: 'Techniques for controlling bleeding and wound care'
        },
        {
          id: 5,
          title: 'Shock Recognition',
          duration: '5 min',
          type: 'reading',
          description: 'Identifying and treating shock in emergency situations'
        },
        {
          id: 6,
          title: 'Burns and Heat Injuries',
          duration: '6 min',
          type: 'video',
          description: 'Proper treatment for burns and heat-related injuries'
        },
        {
          id: 7,
          title: 'Spinal Injury Precautions',
          duration: '7 min',
          type: 'interactive',
          description: 'Recognizing and managing potential spinal injuries'
        },
        {
          id: 8,
          title: 'AED Usage',
          duration: '6 min',
          type: 'practice',
          description: 'Automated External Defibrillator operation and safety'
        },
        {
          id: 9,
          title: 'Certification Quiz',
          duration: '8 min',
          type: 'quiz',
          description: 'Comprehensive medical emergency response assessment'
        }
      ]
    }
  };

  const currentModule = moduleData[moduleType as keyof typeof moduleData];
  
  if (!currentModule) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Module Not Found</h1>
          <Link to="/learn">
            <Button>Back to Learning</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = currentModule.icon;
  const progress = (completedLessons.length / currentModule.totalLessons) * 100;
  const currentLessonData = currentModule.lessons[currentLesson];

  const getLessonTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return '🎥';
      case 'interactive': return '🎯';
      case 'practice': return '🤝';
      case 'reading': return '📖';
      case 'quiz': return '📝';
      default: return '📚';
    }
  };

  const handleCompleteLesson = () => {
    if (!completedLessons.includes(currentLesson)) {
      setCompletedLessons([...completedLessons, currentLesson]);
    }
    if (currentLesson < currentModule.totalLessons - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/learn" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Learning
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className={cn("p-3 rounded-lg bg-background/50", currentModule.color)}>
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{currentModule.title}</h1>
              <p className="text-muted-foreground">{currentModule.description}</p>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{currentModule.estimatedTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>{currentModule.totalLessons} lessons</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>{Math.round(progress)}% complete</span>
            </div>
          </div>

          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Lesson Content */}
          <div className="lg:col-span-3">
            <Card className={cn("mb-6", currentModule.bgColor)}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">
                      {getLessonTypeIcon(currentLessonData.type)}
                    </span>
                    <div>
                      <CardTitle className="text-xl">
                        Lesson {currentLesson + 1}: {currentLessonData.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {currentLessonData.description}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">
                    {currentLessonData.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Lesson Content Area */}
                <div className="bg-background/50 rounded-lg p-8 text-center">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {currentLessonData.type === 'video' && 'Video Lesson'}
                      {currentLessonData.type === 'interactive' && 'Interactive Exercise'}
                      {currentLessonData.type === 'practice' && 'Hands-on Practice'}
                      {currentLessonData.type === 'reading' && 'Reading Material'}
                      {currentLessonData.type === 'quiz' && 'Knowledge Assessment'}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {currentLessonData.description}
                    </p>
                    <Button size="lg" className="mr-4">
                      <Play className="h-4 w-4 mr-2" />
                      Start Lesson
                    </Button>
                  </div>
                </div>

                {/* Lesson Controls */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button 
                    variant="outline" 
                    disabled={currentLesson === 0}
                    onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                  >
                    Previous Lesson
                  </Button>
                  
                  <div className="flex space-x-2">
                    <Button onClick={handleCompleteLesson}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Complete Lesson
                    </Button>
                    {currentLesson < currentModule.totalLessons - 1 && (
                      <Button 
                        variant="outline"
                        onClick={() => setCurrentLesson(currentLesson + 1)}
                      >
                        Next Lesson
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lesson Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentModule.lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className={cn(
                        "flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors",
                        index === currentLesson && "bg-primary/10 border border-primary/20",
                        completedLessons.includes(index) && "bg-alert-success/10",
                        index !== currentLesson && !completedLessons.includes(index) && "hover:bg-muted/50"
                      )}
                      onClick={() => setCurrentLesson(index)}
                    >
                      <div className="flex-shrink-0">
                        {completedLessons.includes(index) ? (
                          <CheckCircle className="h-5 w-5 text-alert-success" />
                        ) : (
                          <div className={cn(
                            "w-5 h-5 rounded-full border-2",
                            index === currentLesson ? "border-primary bg-primary" : "border-muted-foreground"
                          )} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {lesson.title}
                        </p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{getLessonTypeIcon(lesson.type)}</span>
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Learning Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-1">💡 Take Notes</p>
                  <p className="text-xs text-muted-foreground">
                    Write down key points for better retention
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-1">🎯 Practice Regularly</p>
                  <p className="text-xs text-muted-foreground">
                    Review procedures to build muscle memory
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-1">👥 Share Knowledge</p>
                  <p className="text-xs text-muted-foreground">
                    Teach others to reinforce your learning
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

export default LearningModule;