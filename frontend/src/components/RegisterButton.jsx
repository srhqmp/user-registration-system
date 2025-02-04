import { useState } from 'react';
import { useUser } from '../context/UserContext';

const RegisterButton = () => {
  const { formData } = useUser();
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    // validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.profileImage
    ) {
      setFormError('Please fill out all required fields.');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('middleName', formData.middleName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    if (formData.profileImage)
      formDataToSend.append('profileImage', formData.profileImage);

    try {
      // Handle submit

      setFormError('');
      alert('User registered successfully!');
    } catch (error) {
      setFormError('Error registering user.');
      console.error(error);
    }
  };

  return (
    <div>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};

export default RegisterButton;
