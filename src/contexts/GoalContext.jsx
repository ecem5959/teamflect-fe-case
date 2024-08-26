import { createContext, useContext } from 'react';
import useGoal from '../hooks/useGoals';

const GoalContext = createContext({});

export const GoalProvider = ({ children }) => {
  const goal = useGoal();

  return <GoalContext.Provider value={goal}>{children}</GoalContext.Provider>;
};

export const useGoalContext = () => useContext(GoalContext);
