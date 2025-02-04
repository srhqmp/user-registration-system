import { UserProvider } from './context/UserContext';
import UserRegistration from './components/UserRegistration';

const App = () => {
  return (
    <UserProvider>
      <div>
        <UserRegistration />
      </div>
    </UserProvider>
  );
};

export default App;
