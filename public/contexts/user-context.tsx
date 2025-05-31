import React from "react";
import { User, UserRole } from "../types/user";
import { mockCurrentUser } from "../data/mock-data";

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
  canAccess: (feature: string) => boolean;
}

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(mockCurrentUser);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we're using mock data
      setUser(mockCurrentUser);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  // Permission check based on user role
  const hasPermission = (permission: string) => {
    if (!user) return false;
    
    // Admin has all permissions
    if (user.role === 'admin') return true;
    
    // Role-based permissions
    const rolePermissions: Record<UserRole, string[]> = {
      admin: ['*'], // All permissions
      startup: [
        'view_own_dashboard', 
        'manage_opportunities', 
        'view_applications', 
        'manage_team',
        'view_analytics',
        'messaging'
      ],
      student: [
        'view_own_dashboard',
        'view_opportunities',
        'manage_applications',
        'view_own_analytics',
        'messaging'
      ]
    };
    
    return rolePermissions[user.role].includes(permission) || rolePermissions[user.role].includes('*');
  };

  // Feature access check
  const canAccess = (feature: string) => {
    if (!user) return false;
    
    const featureAccess: Record<string, UserRole[]> = {
      dashboard: ['admin', 'startup', 'student'],
      user_management: ['admin', 'startup'],
      opportunity_management: ['admin', 'startup', 'student'],
      application_tracking: ['admin', 'startup', 'student'],
      messaging: ['admin', 'startup', 'student'],
      analytics: ['admin', 'startup', 'student'],
      content_management: ['admin'],
      settings: ['admin', 'startup', 'student'],
      workflow: ['admin', 'startup'],
      audit_logs: ['admin']
    };
    
    return featureAccess[feature]?.includes(user.role) || false;
  };

  const value = {
    user,
    isLoading,
    error,
    login,
    logout,
    hasPermission,
    canAccess
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};