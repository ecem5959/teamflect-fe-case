import { useEffect, useMemo, useState } from 'react';
import { getData } from '../services/fetch';

const useUsers = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getData('users')
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const memoizedUsers = useMemo(() => users, [users]);

  return {
    users: memoizedUsers,
    setUsers,
  };
};

export default useUsers;
