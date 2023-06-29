const jwt = require('jsonwebtoken');
const {secretKey} = require('./config');
const {StudentModel, ModirAmuzModel} = require("../models/student");
const {OstadModel, ModirITModel, MosavvabModel, TermiModel} = require("../models/student");


isStuORMod = (req, res, next) => {
    if (req.role_id === 2 ) {
        StudentModel.findById(req.userId).exec().then(admin => {
            if (!admin) {
                res.status(404).send({message: 'not found this admin'});
            } else {
                req.faculty = admin.faculty;
                req.password = admin.password;
                req.email = admin.email;
                req.id = admin.idNumber;
                console.log(req.faculty)
                req.role_id = 2;
                res.status(200);
                next();
            }
        }).catch(err => {
            console.error(err);
        });
    } else if (req.role_id === 1) {
        ModirAmuzModel.findById(req.userId).exec().then(admin => {
            if (!admin) {
                res.status(404).send({message: 'not found this admin'});
            } else {
                req.faculty = admin.faculty;
                res.status(200);
                next();
            }
        }).catch(err => {
            console.error(err);
        });
    } else if (req.role_id === 3 ) {
        OstadModel.findById(req.userId).exec().then(admin => {
            if (!admin) {
                res.status(404).send({message: 'not found this admin'});
            } else {
                req.faculty = admin.faculty;
                req.id = admin.idNumber;
                res.status(200);
                next();
            }
        }).catch(err => {
            console.error(err);
        });
    } else {
        res.status(403).send({message: 'who r u?'});
    }
}

isAdmin = (req, res, next) => {
    if (req.role_id === 0)
        ModirITModel.findById(req.userId).exec().then(admin => {
            if (!admin) {
                res.status(404).send({message: 'not found this admin'});
            } else {
                res.status(200);
                next();
            }
        }).catch(err => {
            console.error(err);
        });
    else {
        res.status(403).send({message: 'who r u'});
    }
}
isStudent = (req, res, next) => {
    if (req.role_id === 2)
        StudentModel.findById(req.userId).exec().then(admin => {
            if (!admin) {
                res.status(404).send({message: 'not found this admin'});
            } else {
                res.status(200);
                next();
            }
        }).catch(err => {
            console.error(err);
        });
    else {
        res.status(403).send({message: 'who r u is student'});
    }
}

isAmuz = (req, res, next) => {
    if (req.role_id === 1)
        ModirAmuzModel.findById(req.userId).exec().then(admin => {
            if (!admin) {
                res.status(404).send({message: 'not found this'});
            } else {
                res.status(200);
                req.faculty = admin.faculty;
                next();
            }
        }).catch(err => {
            console.error(err);
        });
    else {
        res.status(403).send({message: 'who r u is student'});
    }
}


function verifyToken(req, res, next) {

    const authHeader = req.headers['test'];

    if (!authHeader) {
        return res.status(401).json({message: 'Authorization header missing'});
    }
    token = authHeader;

    if (!token) {
        return res.status(403).send({message: 'no token provided'});
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).send({message: 'Failed to authenticate token'});
        }
        req.userId = decoded.id;
        req.role_id = decoded.role_id;
        console.log('role_id in verifyToken is = ', req.role_id);
        next();
    });
}

function generateToken(user, role_id) {
    const payload = {id: user._id, role_id: role_id};
    return jwt.sign(payload, secretKey, {expiresIn: '100000d'}, (error, token) => {
        if (error) {
            console.error(error);
        } else {
            console.log(token);
        }
    });
}



module.exports = {
    verifyToken,
    generateToken,
    isAdmin,
    isStuORMod,
    isStudent,
    isAmuz
};
