import UserForm from './UserForm';
import UserInformation from './UserInformation';
import { useUser } from '../context/UserContext';

const UserRegistration = () => {
  const { submittedData, resetData } = useUser();

  return (
    <div>
      <h2>User Registration</h2>
      {submittedData ? (
        <div className="container">
          <div id="success-message">User registered successfully!</div>
          <UserInformation data={submittedData} />
          <button onClick={() => resetData()}>Register Another User?</button>
        </div>
      ) : (
        <UserForm />
      )}
    </div>
  );
};

export default UserRegistration;
