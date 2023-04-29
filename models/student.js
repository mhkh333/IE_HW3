const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    idNumber: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },

    grade: {
        type: String
    },
    entranceTerm: {
        type: Number
    },
    entranceYear: {
        type: Number
    },
    mean: {
        type: Number
    },
    faculty: {
        type: String
    },
    fieldOfStudy: {
        type: String
    }
});
//
const OstadSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    idNumber: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    faculty: {
        type: String
    },
    fieldOfStudy: {
        type: String
    },
    rank: {
        type: String
    }
});

const StudentModel = mongoose.model('Student', StudentSchema);
const OstadModel = mongoose.model('Ostad', OstadSchema);

module.exports = {
    StudentModel: StudentModel,
    OstadModel: OstadModel

}

//
// module.exports = {
//     OstadModel: OstadModel
// }
