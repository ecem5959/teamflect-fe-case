import { createContext, useState, useMemo, useEffect } from 'react';
import { getData } from '../services/fetch';

export const GoalContext = createContext({});

export const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState(null);

  useEffect(() => {
    getData('goals')
      .then((data) => {
        setGoals(data);
        console.log('goals', data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const value = useMemo(() => ({ goals, setGoals }), [goals]);

  return <GoalContext.Provider value={value}>{children}</GoalContext.Provider>;
};
