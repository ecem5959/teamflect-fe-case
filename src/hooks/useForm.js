import { useCallback, useMemo, useState } from 'react';

const useForm = () => {
  const initialFormData = {
    ownerId: '',
    startDate: '',
    endDate: '',
    parentId: '',
    title: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const resetFormData = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
  }, []);

  const memoizedFormData = useMemo(() => formData, [formData]);
  const memoizedErrors = useMemo(() => errors, [errors]);

  return {
    formData: memoizedFormData,
    setFormData,
    handleInputChange,
    resetFormData,
    validateForm,
    errors: memoizedErrors,
  };
};

export default useForm;
