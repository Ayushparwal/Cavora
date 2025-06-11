import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  signupWithGoogle: () => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('cosmos_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call with basic validation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Basic password validation (in real app, this would be done on server)
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      
      const mockUser: User = {
        id: '1',
        name: email.split('@')[0],
        email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      };
      
      setUser(mockUser);
      localStorage.setItem('cosmos_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockUser: User = {
        id: 'google_1',
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=google'
      };
      
      setUser(mockUser);
      localStorage.setItem('cosmos_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Google login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call with validation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Basic validation (in real app, this would be done on server)
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      
      if (name.length < 2) {
        throw new Error('Name must be at least 2 characters');
      }
      
      const mockUser: User = {
        id: '2',
        name,
        email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      };
      
      setUser(mockUser);
      localStorage.setItem('cosmos_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const signupWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockUser: User = {
        id: 'google_2',
        name: 'Jane Smith',
        email: 'jane.smith@gmail.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=google_signup'
      };
      
      setUser(mockUser);
      localStorage.setItem('cosmos_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Google signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cosmos_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      loginWithGoogle,
      signup,
      signupWithGoogle,
      logout,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};