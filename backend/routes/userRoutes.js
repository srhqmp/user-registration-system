const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const { registerUser } = require('../controllers/userController');

router.post('/register', upload.single('profileImage'), registerUser);

module.exports = router;
