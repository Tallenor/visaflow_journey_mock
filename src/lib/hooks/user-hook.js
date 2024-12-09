import { useState, useEffect } from 'react';

const useLocalStorageUser = (initialUser = {}) => {
  const [user, setUser] = useState(() => {
    try {
      // Try to get user from localStorage
      const storedUser = localStorage.getItem('user');
      // If exists, parse and return it, otherwise return initialUser
      return storedUser ? JSON.parse(storedUser) : initialUser;
    } catch (error) {
      console.error('Error reading user from localStorage:', error);
      return initialUser;
    }
  });

  // Update localStorage whenever user changes
  useEffect(() => {
    try {
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user to localStorage:', error);
    }
  }, [user]);

  // Function to update specific user fields
  const updateUser = (updates) => {
    setUser(prevUser => ({
      ...prevUser,
      ...updates
    }));
  };

  // Function to clear user data
  const clearUser = () => {
    setUser(initialUser);
    localStorage.removeItem('user');
  };

  return {
    user,
    updateUser,
    clearUser,
    setUser
  };
};

export default useLocalStorageUser;