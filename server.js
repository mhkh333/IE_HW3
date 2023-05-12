//hi server
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const {verifyToken, generateToken} = require('./config/auth');

const dbConfig = require('./config/db.config.js');
const {StudentModel} = require("./models/student.js");
const {OstadModel, ModirITModel, MosavvabModel, TermiModel} = require("./models/student");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));


// app.use('/admin')
app.use('/', userRoutes);


// app.use('/Professors',userRoutes);

console.log(process.env.ENV_KEY)
main().then(() => {
        console.log("connected to mongodb")
    }
).catch(err => console.log(err));


const newProf = new StudentModel({
    firstName: "aliali",
    lastName: "",
    idNumber: "",
    password: "",
    email: "studentEntity.getEmail()",
    phone: "studentEntity.getPhone()",
    grade: "studentEntity.getGrade()",
    entranceYear: 2019,
    mean: 18,
    faculty: "studentEntity.getFaculty()",
    fieldOfStudy: "studentEntity.getFieldOfStudy()",
});

const newProff = new ModirITModel({
    firstName: "firstname",
    lastName: "",
    idNumber: "",
    password: "",
    email: "studentEntity.getEmail()",
    phone: "studentEntity.getPhone()"
});

const newMossavab = new MosavvabModel({
    name: 'math2',
    pre: 'math1',
    ham: [],
    vahed: 3,
    faculty: 'Math',
    released: 'YES'
});

const newTermi = new TermiModel({
    name: 'math2',
    pre: 'math1',
    ham: [],
    vahed: 3,
    faculty: 'Math',
    released: 'NO',
    time_class: '',
    exam_time: '',
    exam_place: 'iran',
    ostad: 'akbari',
    capacity: 33,
    term: ''
});

//
// newProf.save().then((stud) => {
//     console.log("inserted")
// }).catch(err => {
//     console.log(err)
// })
// newMossavab.save().then(() => {
//     console.log("insertedd")
// }).catch(err => {
//     console.log(err)
// })


// StudentModel

async function main() {
    await mongoose.connect(process.env.MONGO_DB_URL || 'mongodb://0.0.0.0:27017/tamrin2');
}

app.listen(process.env.ENV_KEY || 3000, () => console.log('Server started'))

