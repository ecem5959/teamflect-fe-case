import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder
      gutter={8}
      toastOptions={{
        className: 'toast',
        duration: 3000,
        style: {
          color: '#233043',
          borderRadius: '6px',
          padding: '16px',
        },
      }}
    />
  );
};

export default ToasterProvider;
