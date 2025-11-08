import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  userId: string;
  name: string;
  mobile: string;
  pin?: string;
}

interface AuthContextType {
  user: User | null;
  login: (userId: string, password: string) => boolean;
  register: (userId: string, password: string, name: string, mobile: string) => boolean;
  logout: () => void;
  setupPin: (pin: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userId: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[userId] && users[userId].password === password) {
      const userData = { ...users[userId] };
      delete userData.password;
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const register = (userId: string, password: string, name: string, mobile: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[userId]) {
      return false; // User already exists
    }
    users[userId] = { userId, password, name, mobile };
    localStorage.setItem('users', JSON.stringify(users));
    const userData = { userId, name, mobile };
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const setupPin = (pin: string) => {
    if (user) {
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      users[user.userId].pin = pin;
      localStorage.setItem('users', JSON.stringify(users));
      const updatedUser = { ...user, pin };
      setUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, setupPin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
