const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authJwt = require("../config/auth");
const {ModirITModel} = require("../models/student");
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


/// Login
// router.post('/login', );


/////// Modire Amuzesh
router.get('/students', userController.getStudents);
router.get('/student/:id', userController.getStudentID);
// router.post('/', userController.createUser);

router.get('/Professors', [authJwt.verifyToken], userController.getOstads);
router.get('/Professor/:id', userController.getProfID);


router.get('/courses', userController.getCourses);


///// Modire amuzesh END


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
        } else if (email.includes('ostad')) {
            role_id = 3;
        } else if (email.includes('modireAmuzesh')) {
            role_id = 1;
        }
        const user = await ModirITModel.findOne({email});
        if (!user || user.password !== password) {
            return res.status(401).send({message: 'Invalid email or password'});
        }
        const token = generateToken(user, role_id);
        // res.token = token;
        console.log('generfated token is:');
        ssToken = token;
        ///////////////////////////
        // await fetch('http://localhost:3000/admin/Professors', {
        //     headers: {
        //         'Authorization': `Bearer ${token}`
        //     }
        // });
        ///////////////////////////////////
        // res.headers.test = token;
        req.headers.authorization = token;
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

router.post('/admin/Professor', [authJwt.verifyToken, authJwt.isAdmin], userController.postAdminProf);
router.post('/admin/student', [authJwt.verifyToken, authJwt.isAdmin], userController.postAdminStudent);

router.put('/admin/Professor/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.putAdminProf);
router.put('/admin/student/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.putAdminStudent);

router.delete('/admin/Professor/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.deleteAdminProf);
router.delete('/admin/student/:id', [authJwt.verifyToken, authJwt.isAdmin], userController.deleteAdminStudent);

module.exports = router;
