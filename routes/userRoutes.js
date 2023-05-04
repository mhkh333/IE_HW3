const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/////// Modire Amuzesh
router.get('/students', userController.getStudents);
router.get('/student/:id', userController.getStudentID);
// router.post('/', userController.createUser);

router.get('/Professors', userController.getOstads);
router.get('/Professor/:id', userController.getProfID);


router.get('/courses', userController.getCourses);


///// Modire amuzesh END


////////Admin

// router.post('/admin/Professor', userController.postAdmProf);
router.get('/admin/Professors', userController.getAdminProfessors);

module.exports = router;
