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
    vahed: {type: Number}
});

const TermiSchema = new Schema({
    name: {type: String},
    pre: {type: [String]},
    ham: {type: [String]},
    vahed: {type: Number},
    time_class: {type: Date},
    exam_time: {type: Date},
    exam_place: {type: String},
    ostad: {type: String},
    capacity: {type: Number},
    term: {type: String}
})


const StudentModel = mongoose.model('Student', StudentSchema);
const OstadModel = mongoose.model('Ostad', OstadSchema);
const ModirAmuzModel = mongoose.model('ModirAmuz', Modir_AmuzSchema);
const ModirITModel = mongoose.model('ModirIT', ModirITSchema);
const MosavvabModel = mongoose.model('Mosavvab', MosavvabSchema);
const TermiModel = mongoose.model('Termi', TermiSchema);

module.exports = {
    StudentModel: StudentModel,
    OstadModel: OstadModel,
    ModirAmuzModel: ModirAmuzModel,
    ModirITModel: ModirITModel,
    MosavvabModel: MosavvabModel,
    TermiModel: TermiModel
}

//
// module.exports = {
//     OstadModel: OstadModel
// }
