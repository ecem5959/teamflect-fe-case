import { useEffect, useMemo, useState } from 'react';
import { getData } from '../services/fetch';

const useGoal = () => {
  const [goals, setGoals] = useState(null);

  useEffect(() => {
    getData('goals')
      .then((data) => {
        setGoals(data);
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

  const memoizedGoals = useMemo(() => goals, [goals]);
  const memoizedTreeData = useMemo(() => treeData, [treeData]);

  return {
    goals: memoizedGoals,
    setGoals,
    treeData: memoizedTreeData,
  };
};

export default useGoal;
