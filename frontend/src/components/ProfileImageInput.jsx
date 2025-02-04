import { useUser } from '../context/UserContext';

const ProfileImageInput = () => {
  const {  updateFormData } = useUser();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    updateFormData('profileImage', file);
  };

  return (
    <div>
      <label>Profile Image:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfileImageInput;
