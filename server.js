//hi server
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const {verifyToken, generateToken} = require('./config/auth');
const YAML2 = require('yaml')

const dbConfig = require('./config/db.config.js');
const {StudentModel} = require("./models/student.js");
const {OstadModel, ModirITModel, MosavvabModel, TermiModel} = require("./models/student");

const collection = require('./collection/tamrin2_ie.postman_collection.json');
const collectionV2 = require('./collection/tamrin2_ie.postman_collectionV2.json');
const {transpile} = require('postman2openapi');

const obj2 = require('./newYamlV2.json');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
// const swaggerDocument = YAML.load('./openapi (1).yaml');
const swaggerDocument = YAML.load('./openapi_(2).yaml');

var cors = require('cors')


const openapi = transpile(collection);
const openapiV2 = transpile(collectionV2);
// console.log(6555555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888)
// console.log(JSON.stringify(openapiV2, null, 2));
// console.log(obj2)
const doc = new YAML2.Document();
doc.contents = obj2;
// console.log(doc.toString())

const jsonObject = JSON.stringify(openapiV2, null, 2);

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
    firstName: "akbar",
    lastName: "",
    idNumber: "",
    password: "1234",
    email: "modireIt.getEmail()",
    phone: "modireIt.getPhone()"
});
// newProff.save().then((stud) => {
//          console.log("inserted")
//      }).catch(err => {
//          console.log(err)
//      });
const newMossavab = new MosavvabModel({
    name: 'math2',
    pre: 'math1',
    ham: [],
    vahed: 3,
    faculty: 'Math',
    released: 'YES'
});

// const newTermi = new TermiModel({
//     name: 'math2',
//     pre: 'math1',
//     ham: [],
//     vahed: 3,
//     faculty: 'Math',
//     released: 'NO',
//     time_class: '',
//     exam_time: '',
//     exam_place: 'iran',
//     ostad: 'akbari',
//     capacity: 33,
//     term: ''
// });


// const newTerm = new Term();

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

app.listen(process.env.ENV_KEY || 8000, () => console.log('Server started'))

