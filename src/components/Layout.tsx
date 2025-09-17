import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  userRole?: 'student' | 'admin' | 'teacher';
}

const Layout: React.FC<LayoutProps> = ({ children, userRole = 'admin' }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userRole={userRole} />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;