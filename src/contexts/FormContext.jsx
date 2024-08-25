import { createContext, useContext } from 'react';
import useForm from '../hooks/useForm';

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const form = useForm();

  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
};

export const useFormContext = () => useContext(FormContext);
