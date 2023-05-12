const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authJwt = require("../config/auth");
const {ModirITModel, StudentModel, ModirAmuzModel, OstadModel} = require("../models/student");
const {generateToken} = require("../config/auth");


module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
}



////////Admin
var ssToken;

router.post('/login', async (req, res, next) => {
    try {
        const {email, password} = req.body;
        var role_id; // 0 = modireIt, 1 = modireAmuzesh, 2 = student, 3 = ostad
        if (email.includes('modireIt')) {
            role_id = 0;
        } else if (email.includes('student')) {
            role_id = 2;
            console.log('we have an student email');
        } else if (email.includes('ostad')) {
            role_id = 3;
        } else if (email.includes('modireAmuzesh')) {
            role_id = 1;
        }
        var user;
        if (role_id === 0) {
            user = await ModirITModel.findOne({email});
            if (!user || user.password !== password) {
                return res.status(401).send({message: 'Invalid email or password'});
            }
        } else if (role_id === 1) {
            user = await ModirAmuzModel.findOne({email});
            if (!user || user.password !== password) {
                return res.status(401).send({message: 'Invalid email or password'});
            }
        } else if (role_id === 2) {
            user = await StudentModel.findOne({email});
            if (!user || user.password !== password) {
                return res.status(401).send({message: 'Invalid email or password'});
            }
        } else if (role_id === 3) {
            user = await OstadModel.findOne({email});
            if (!user || user.password !== password) {
                return res.status(401).send({message: 'Invalid email or password'});
            }
        }
        console.log(user.email)
        const token = generateToken(user, role_id);
        // res.token = token;
        console.log('generfated token is:');
        ssToken = token;

        res.send({token});

        // next();
    } catch (err) {
        console.error(err);
        res.status(500).send({message: 'Failed to authenticate user'});
    }
});


//aAdmin
// router.post('/admin/Professor', userController.postAdmProf);
router.get('/admin/Professor/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.getProfID);
router.get('/admin/Professors', [authJwt.verifyToken, authJwt.isAdmin], userController.getAdminProfessors);
router.get('/admin/student/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.getStudentID);
router.get('/admin/students', [authJwt.verifyToken, authJwt.isAdmin], userController.getStudents);
router.get('/admin/manager/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.getManagerID);
router.get('/admin/managers', [authJwt.verifyToken, authJwt.isAdmin], userController.getManagers);

router.post('/admin/Professor', [authJwt.verifyToken, authJwt.isAdmin], userController.postAdminProf);
router.post('/admin/student', [authJwt.verifyToken, authJwt.isAdmin], userController.postAdminStudent);
router.post('/admin/manager', [authJwt.verifyToken, authJwt.isAdmin], userController.postAdminManager);

router.put('/admin/Professor/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.putAdminProf);
router.put('/admin/student/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.putAdminStudent);
router.put('/admin/manager/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.putAdminManager);

router.delete('/admin/Professor/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.deleteAdminProf);
router.delete('/admin/student/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.deleteAdminStudent);
router.delete('/admin/manager/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.deleteAdminManager);


//modire amuzesh && student and even Ostad
router.get('/courses', [authJwt.verifyToken, authJwt.isStuORMod], userController.getCourses);
router.get('/course/:id', [authJwt.verifyToken, authJwt.isStuORMod], userController.getCourseId);

router.get('/students', [authJwt.verifyToken, authJwt.isAmuz], userController.getStudents);
router.get('/student/:id',  [authJwt.verifyToken, authJwt.isAmuz], userController.getStudentID);
router.get('/Professors',  [authJwt.verifyToken, authJwt.isAmuz], userController.getAdminProfessors);
router.get('/Professor/:id',  [authJwt.verifyToken, authJwt.isAmuz], userController.getProfID);

router.post('/course', [authJwt.verifyToken, authJwt.isStuORMod], userController.postCourse);

router.put('/course/:id', [authJwt.verifyToken, authJwt.isStuORMod], userController.putCourse);

router.delete('/course/:id', [authJwt.verifyToken, authJwt.isStuORMod], userController.deleteCourse);


router.put('/student/:id', [authJwt.verifyToken, authJwt.isStuORMod], userController.putStuStu);

module.exports = router;
