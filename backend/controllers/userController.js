const User = require('../models/User');

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, middleName, email, phoneNumber } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'Profile image is required' });
    }

    const newUser = new User({
      firstName,
      lastName,
      middleName,
      email,
      phoneNumber,
      profileImage: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });

    await newUser.save();
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        middleName: newUser.middleName,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
        profileImage: `data:${
          newUser.profileImage.contentType
        };base64,${newUser.profileImage.data.toString('base64')}`,
      },
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { registerUser };
