import { UserProvider } from './context/UserContext';
import UserRegistration from './components/UserRegistration';

const App = () => {
  return (
    <UserProvider>
      <UserRegistration />
    </UserProvider>
  );
};

export default App;
