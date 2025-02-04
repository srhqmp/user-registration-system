import InputField from './InputField';
import ProfileImageInput from './ProfileImageInput';
import RegisterButton from './RegisterButton';

const UserRegistration = () => {
  return (
    <div>
      <h2>User Registration</h2>
      <form>
        <InputField label="First Name" type="text" field="firstName" required />
        <InputField label="Last Name" type="text" field="lastName" required />
        <InputField label="Middle Name" type="text" field="middleName" />
        <InputField label="Email" type="email" field="email" required />
        <InputField label="Phone Number" type="tel" field="phoneNumber" required />
        <ProfileImageInput />
        <RegisterButton />
      </form>
    </div>
  );
};

export default UserRegistration;
