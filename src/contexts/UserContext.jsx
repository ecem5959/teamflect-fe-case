import { createContext, useState, useMemo, useEffect } from 'react';
import { getData } from '../services/fetch';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getData('users')
      .then((data) => {
        setUsers(data);
        console.log('users', data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const value = useMemo(() => ({ users, setUsers }), [users]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
