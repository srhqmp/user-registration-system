import InputField from './InputField';
import ProfileImageInput from './ProfileImageInput';
import RegisterButton from './RegisterButton';
import { useUser } from '../context/UserContext';

const UserRegistration = () => {
  const { submittedData, resetData } = useUser();

  return (
    <div>
      <h2>User Registration</h2>
      {submittedData && (
        <div>
          <div id="success-message">User registered successfully!</div>
          <div className="submitted-data">
            <h3>Submitted Information</h3>
            <div className="submitted-info">
              <div>
                <img
                  src={`${submittedData.profileImage}`}
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                  }}
                  alt="Profile Image"
                  className="profile-image"
                />
              </div>
              <div>
                <div>
                  <label>First Name:</label>
                  <span>{submittedData.firstName}</span>
                </div>
                <div>
                  <label>Last Name:</label>
                  <span>{submittedData.lastName}</span>
                </div>
                <div>
                  <label>Middle Name:</label>
                  <span>{submittedData.middleName}</span>
                </div>
                <div>
                  <label>Email:</label>
                  <span>{submittedData.email}</span>
                </div>
                <div>
                  <label>Phone Number:</label>
                  <span>{submittedData.phoneNumber}</span>
                </div>
              </div>
            </div>
            <button onClick={() => resetData()}>Register Another User?</button>
          </div>
        </div>
      )}
      {!submittedData && (
        <form>
          <InputField
            label="First Name"
            type="text"
            field="firstName"
            required
          />
          <InputField label="Last Name" type="text" field="lastName" required />
          <InputField label="Middle Name" type="text" field="middleName" />
          <InputField label="Email" type="email" field="email" required />
          <InputField
            label="Phone Number"
            type="tel"
            field="phoneNumber"
            required
          />
          <ProfileImageInput />
          <RegisterButton />
        </form>
      )}
    </div>
  );
};

export default UserRegistration;
