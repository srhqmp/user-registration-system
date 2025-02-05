import { useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/UserContext';

const RegisterButton = () => {
  const { formData, updateSubmittedData } = useUser();
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber
    ) {
      setFormError('Please fill out all required fields.');
      return;
    }
    if (!formData.profileImage) {
      setFormError('Profile Image is required.');
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
      const response = await axios.post(
        'http://localhost:5000/api/user/register',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response);
      updateSubmittedData(response.data.user);
      setFormError('');
    } catch (error) {
      setFormError('Error registering user.');
      console.error(error);
    }
  };

  return (
    <div>
      {formError && <p id="error-message">{formError}</p>}
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};

export default RegisterButton;
