const multer = require('multer');
const express = require('express');
const { registerUser } = require('../controllers/userController');

const storage = multer.memoryStorage();
const upload = multer({ storage });
const router = express.Router();

router.post('/register', upload.single('profileImage'), registerUser);

module.exports = router;
