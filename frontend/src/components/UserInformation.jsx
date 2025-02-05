const UserInformation = ({ data }) => {
  return (
    <div className="submitted-data">
      <div className="submitted-info">
        <div>
          <img
            src={data.profileImage}
            alt="Profile Image"
            className="profile-image"
            height={150}
            width={150}
          />
        </div>
        <div>
          <div>
            <label>First Name:</label>
            <span>{data.firstName}</span>
          </div>
          <div>
            <label>Last Name:</label>
            <span>{data.lastName}</span>
          </div>
          <div>
            <label>Middle Name:</label>
            <span>{data.middleName}</span>
          </div>
          <div>
            <label>Email:</label>
            <span>{data.email}</span>
          </div>
          <div>
            <label>Phone Number:</label>
            <span>{data.phoneNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
