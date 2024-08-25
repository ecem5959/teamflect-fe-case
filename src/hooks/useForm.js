import { useMemo, useState } from 'react';

const useForm = () => {
  const [formData, setFormData] = useState({
    ownerId: '',
    startDate: '',
    endDate: '',
    parentId: '',
    title: '',
    description: '',
  });

  const handleInputChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const memoizedFormData = useMemo(() => formData, [formData]);

  return {
    formData: memoizedFormData,
    handleInputChange,
  };
};

export default useForm;
