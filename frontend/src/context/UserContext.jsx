import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    phoneNumber: '',
    profileImage: null,
  });
  const [submittedData, setSubmittedData] = useState(null);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateSubmittedData = (data) => {
    setSubmittedData(data);
  };

  const resetData = () => {
    setFormData({
      firstName: '',
      lastName: '',
      middleName: '',
      email: '',
      phoneNumber: '',
      profileImage: null,
    });
    setSubmittedData(null);
  };

  return (
    <UserContext.Provider
      value={{
        formData,
        submittedData,
        resetData,
        updateFormData,
        updateSubmittedData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
