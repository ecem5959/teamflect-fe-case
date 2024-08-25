import './customInput.scss';

const CustomInput = ({ onChange, value }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="customInput">
      <input
        type="text"
        id="goal-title"
        placeholder="Add goal title"
        value={value}
        onChange={handleChange}
      />
      <div className="underline" />
    </div>
  );
};

export default CustomInput;
