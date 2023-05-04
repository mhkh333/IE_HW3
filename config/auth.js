const jwt = require('jsonwebtoken');
const {secretKey} = require('./config');

function verifyToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send({message: 'no token provided'});
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).send({message: 'Failed to authenticate token'});
        }
        req.userId = decoded.id;
        next();
    });
}

function generateToken(user) {
    const payload = {id: user.id};
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
};
