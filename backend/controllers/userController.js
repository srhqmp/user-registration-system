const User = require('../models/User');

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, middleName, email, phoneNumber } = req.body;

    console.log('FILE:', req.file);

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
    res
      .status(201)
      .json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { registerUser };
