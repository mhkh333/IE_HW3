// model
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
    },
    ostad: {
        type: String
    },
    passcoures: {
        type: [String]
    },


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
    },
    students: {
        type: [String]
    },
    teachedlessonsId: {
        type: [String]
    },
    termlessonsId: {
        type: [String]
    }
});

//modire amuzeshi
const Modir_AmuzSchema = new Schema({
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
    }
});

const ModirITSchema = new Schema({
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
    }
});

const MosavvabSchema = new Schema({
    name: {type: String},
    pre: {type: [String]},
    ham: {type: [String]},
    vahed: {type: Number},
    faculty: {type: String},
    released: {type: String}
});

const TermiSchema = new Schema({
    name: {type: String},
    pre: {type: [String]},
    ham: {type: [String]},
    vahed: {type: Number},
    faculty: {type: String},
    released: {type: String},
    time_class: {type: Date},
    exam_time: {type: Date},
    exam_place: {type: String},
    ostad: {type: String},
    capacity: {type: Number},
    term: {type: String}
});


const Term = new Schema({
    name: {
        type: String
    },
    idNumbers: {
        type: [String]
    },
    termis: {
        type: [String]
    },
    preregis: {
        type: [String]
    },
    isNow: {
        type: Boolean
    },
    faculty: {
        type: String
    }


});


const Faculty = new Schema({
    name: {
        type: String
    }
});

const Register = new Schema({
    studentId: {
        type: String
    },
    termiCourses: {
        type: [String]
    },
    isApprovedFromStu: {
        type: Boolean   //koochack ya bzork B b
    },
    isApprovedFromOst: {
        type: Boolean
    },
    isApprovedFromModirAmuzesh: {
        type: Boolean
    },
    term: {
        type: String
    }

});

const PreRegister = new Schema({
    studentId: {
        type: String
    },
    termiCourses: {
        type: [String]
    },
    term: {
        type: String
    }
});


const StudentModel = mongoose.model('Student', StudentSchema);
const OstadModel = mongoose.model('Ostad', OstadSchema);
const ModirAmuzModel = mongoose.model('ModirAmuz', Modir_AmuzSchema);
const ModirITModel = mongoose.model('ModirIT', ModirITSchema);
const MosavvabModel = mongoose.model('Mosavvab', MosavvabSchema);
const TermiModel = mongoose.model('Termi', TermiSchema);
const TermModel = mongoose.model('Term', Term);
const FacultyModel = mongoose.model('Faculty', Faculty);
const RegisterModel = mongoose.model('Register', Register);
const PreRegisterModel = mongoose.model('PreRegister', PreRegister);

module.exports = {
    StudentModel: StudentModel,
    OstadModel: OstadModel,
    ModirAmuzModel: ModirAmuzModel,
    ModirITModel: ModirITModel,
    MosavvabModel: MosavvabModel,
    TermiModel: TermiModel,
    PreRegisterModel: PreRegisterModel,
    RegisterModel: RegisterModel,
    TermModel: TermModel,
    FacultyModel: FacultyModel,
}


