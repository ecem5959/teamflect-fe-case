import './button.scss';
const Button = ({ text, onClick }) => {
  return (
    <button className="customButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
