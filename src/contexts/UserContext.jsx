import { createContext, useContext } from 'react';
import useUsers from '../hooks/useUsers';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const user = useUsers();

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
