import { useUser } from '../context/UserContext';

const InputField = ({ label, type, field, required = false }) => {
  const { formData, updateFormData } = useUser();

  return (
    <div>
      <label>{label}:</label>
      <input
        type={type}
        value={formData[field]}
        onChange={(e) => updateFormData(field, e.target.value)}
        required={required}
      />
    </div>
  );
};

export default InputField;
