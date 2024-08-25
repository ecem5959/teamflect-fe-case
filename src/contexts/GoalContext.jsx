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

  const treeData = useMemo(() => {
    if (!goals) return null;

    const parentList = goals.filter((goal) => !goal.parentId);
    return parentList.map((parent) => ({
      ...parent,
      childList: goals.filter((goal) => goal.parentId === parent.id),
    }));
  }, [goals]);

  const value = useMemo(
    () => ({ goals, setGoals, treeData }),
    [goals, treeData],
  );

  return <GoalContext.Provider value={value}>{children}</GoalContext.Provider>;
};
