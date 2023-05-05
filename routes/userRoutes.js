const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authJwt = require("../config/auth");
const {ModirITModel} = require("../models/student");
const {generateToken} = require("../config/auth");


module.exports = function (app){
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

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await ModirITModel.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).send({ message: 'Invalid email or password' });
        }
        const token = generateToken(user);
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
        res.send({ token });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to authenticate user' });
    }
});

// router.post('/admin/Professor', userController.postAdmProf);
// router.get('/admin/Professors', userController.getAdminProfessors);
router.get('/admin/Professors',[authJwt.verifyToken, authJwt.isAdmin] , userController.getAdminProfessors);

module.exports = router;
