import React from 'react';
import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface Alert {
  id: string;
  type: 'critical' | 'warning' | 'info' | 'success';
  title: string;
  message: string;
  timestamp: Date;
  isActive: boolean;
  location?: string;
}

interface AlertCardProps {
  alert: Alert;
  onDismiss?: (id: string) => void;
  showDismiss?: boolean;
}

const AlertCard: React.FC<AlertCardProps> = ({ alert, onDismiss, showDismiss = false }) => {
  const getAlertIcon = () => {
    switch (alert.type) {
      case 'critical':
        return <AlertTriangle className="h-5 w-5" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5" />;
      case 'success':
        return <CheckCircle className="h-5 w-5" />;
      case 'info':
        return <Info className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const getAlertStyles = () => {
    switch (alert.type) {
      case 'critical':
        return 'status-critical border-alert-critical/20';
      case 'warning':
        return 'status-warning border-alert-warning/20';
      case 'success':
        return 'status-safe border-alert-success/20';
      case 'info':
        return 'status-info border-alert-info/20';
      default:
        return 'status-info border-alert-info/20';
    }
  };

  return (
    <Card className={cn(
      "border-l-4 transition-all duration-200 hover:shadow-md",
      getAlertStyles(),
      alert.isActive && alert.type === 'critical' && "pulse-alert"
    )}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <div className={cn(
              "flex-shrink-0 p-1 rounded-full",
              alert.type === 'critical' && "text-alert-critical",
              alert.type === 'warning' && "text-alert-warning",
              alert.type === 'success' && "text-alert-success",
              alert.type === 'info' && "text-alert-info"
            )}>
              {getAlertIcon()}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {alert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {alert.message}
              </p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>{alert.timestamp.toLocaleTimeString()}</span>
                {alert.location && (
                  <span>📍 {alert.location}</span>
                )}
              </div>
            </div>
          </div>
          {showDismiss && onDismiss && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDismiss(alert.id)}
              className="ml-2 h-8 w-8 p-0 hover:bg-destructive hover:text-destructive-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertCard;