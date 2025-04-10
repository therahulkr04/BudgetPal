'use client';

import {ReactNode, useState, useEffect, createContext, useContext} from 'react';
// import {signIn, signOut} from 'next-auth/react';
// import {useSession} from 'next-auth/react';

interface AuthContextProps {
  user: any | null;
  loading: boolean;
  signIn: (credentials: any) => Promise<any>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
});

export function AuthProvider({children}: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const {data: session, status} = useSession();

  useEffect(() => {
    // Simulate authentication status check
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleSignIn = async (credentials: any) => {
    try {
      // Simulate authentication
      if (credentials.email === 'test@example.com' && credentials.password === 'password') {
        const userData = {
          id: '1',
          email: credentials.email,
          name: 'Test User',
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return {success: true};
      } else {
        return {error: 'Invalid credentials'};
      }
    } catch (error: any) {
      console.error('Sign-in error:', error);
      return {error: error.message};
    }
  };

  const handleSignOut = async () => {
    try {
      setUser(null);
      localStorage.removeItem('user');
    } catch (error: any) {
      console.error('Sign-out error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn: handleSignIn, signOut: handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
}
