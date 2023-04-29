const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/students', userController.getStudents);
// router.post('/', userController.createUser);
router.get('/Professors', userController.getOstads);

module.exports = router;
