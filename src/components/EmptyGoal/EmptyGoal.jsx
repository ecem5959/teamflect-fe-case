import NoGoal from '../Icons/NoGoal';
import './emptyGoal.scss';
import Button from '../Button/Button';
const EmptyGoal = () => {
  return (
    <div className="emptyGoal">
      <NoGoal />
      <h1>No goals found</h1>
      <p className="emptyGoalText">Adjust your filters or create a new goal.</p>
      <p className="emptyGoalSubText">
        Need help? Check out <u>how it works</u> for more tips or{' '}
        <u>send us a message</u>
      </p>
      <Button text="New Goal" />
    </div>
  );
};

export default EmptyGoal;
