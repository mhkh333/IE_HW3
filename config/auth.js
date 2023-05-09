const jwt = require('jsonwebtoken');
const {secretKey} = require('./config');
const {StudentModel} = require("../models/student");
const {OstadModel, ModirITModel, MosavvabModel, TermiModel} = require("../models/student");

const verifySignUp = {

    verifyToken
};

const getToken = async () => {
    const response = await fetch('/login');
    const data = await response.json();
    return data.token;
};

const getProtectedData = async () => {
    const token = await getToken();
    const response = await fetch('/admin/Professors', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    console.log(data);
};

isAdmin = (req, res, next) => {
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


    //     (err, user) => {
    //     if (err) {
    //         res.status(500).send({message: err});
    //     }else{
    //         if(user.role_id === 0){
    //             next();
    //         }else{
    //             res.status(401).send({message: 'Who are u???'});
    //         }
    //
    //     }
    //
    //
    // })
}


function verifyToken(req, res, next) {
    /////////////////////////////////////////shak bar asar
    // var ss = req.headers.authorization.split(' ');
    // const token = ss[1];

    // console.log(req.headers.authorization)
    // const token = req.body.token;
    const authHeader = req.headers['test'];

    if (!authHeader) {

        return res.status(401).json({message: 'Authorization header missing'});
    }
    // const token = authHeader.split(' ')[1];
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
        next();
    });
}

function generateToken(user, role_id) {


    const payload = {id: user.id, role_id: role_id};
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
    isAdmin
};
