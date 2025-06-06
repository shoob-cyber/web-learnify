import { useEffect, useState } from 'react';
import { User } from '../types/types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user data', error);
      }
    }
    setLoading(false);
  }, []);

  return { user, loading };
};