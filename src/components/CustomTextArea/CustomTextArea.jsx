import './customTextArea.scss';

const CustomTextArea = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="customTextArea">
      <textarea
        id="description"
        placeholder="Add a description"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomTextArea;
