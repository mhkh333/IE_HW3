const mongoose = require('mongoose');
const {
    StudentModel,
    OstadModel,
    MosavvabModel,
    TermiModel,
    ModirITModel,
    ModirAmuzModel
} = require("../models/student");


///////////////////////// Modire Amuzesh
exports.getStudents = async (req, res) => {
    try {
        const students = await StudentModel.find({});
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.getStudentID = async (req, res) => {
    try {
        const student = await StudentModel.findOne({idNumber: req.params.id});
        res.status(200).json(student);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};


exports.creatStudent = async (req, res) => {
    const student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);

    } catch (err) {
        res.status(400).json({message: err.message})
    }
};


exports.getOstads = async (req, res) => {
    try {
        const students = await OstadModel.find({});
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};


exports.getCourses = async (req, res) => {
    try {
        let course = [];
        const courses = await MosavvabModel.find({});
        const coursesTerm = await TermiModel.find({});
        course.push(courses);
        course.push(coursesTerm);
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

////// Modire Amuzesh END

// exports.postAdmProf
exports.getProfID = async (req, res) => {
    try {
        const Prof = await OstadModel.findOne({idNumber: req.params.id});
        res.status(200).json(Prof);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};


exports.getAdminProfessors = async (req, res) => {
    try {
        const students = await OstadModel.find({});
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.postAdminProf = async (req, res) => {
    try {
        const {firstName, lastName, idNumber, password, email, phone, faculty, fieldOfStudy, rank} = req.body;
        const newProf = new OstadModel({
            firstName,
            lastName,
            idNumber,
            password,
            email,
            phone,
            faculty,
            fieldOfStudy,
            rank
        });

        await newProf.save().then((stud) => {
            console.log("inserted ostad");
            res.status(200).json(newProf);
            // return;
        }).catch(err => {
            console.log(err);
        })

    } catch (err) {
        res.status(500).json({message: err.message});

    }
}
exports.postAdminStudent = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            idNumber,
            password,
            email,
            phone,
            grade,
            entranceYear,
            mean,
            faculty,
            fieldOfStudy

        } = req.body;

        const newProf = new StudentModel({
            firstName,
            lastName,
            idNumber,
            password,
            email,
            phone,
            grade,
            entranceYear,
            mean,
            faculty,
            fieldOfStudy

        });

        await newProf.save().then((stud) => {
            console.log("inserted student");
            res.status(200).json(newProf);
            // return;
        }).catch(err => {
            console.log(err);
        })

    } catch (err) {
        res.status(500).json({message: err.message});

    }
}

exports.putAdminProf = async (req, res) => {
    try {
        const ostad = await OstadModel.findOneAndUpdate(
            {idNumber: req.params.id}, req.body, {new: true}
        );
        res.send(ostad);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.putAdminStudent = async (req, res) => {
    try {
        const ostad = await StudentModel.findOneAndUpdate(
            {idNumber: req.params.id}, req.body, {new: true}
        );
        res.send(ostad).json;
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}


exports.deleteAdminProf = async (req, res) => {
    try {
        const id = req.params.id;

        try {
            const deletedDoc = await OstadModel.findByIdAndDelete(id);

            if (!deletedDoc) {
                return res.status(404).json({message: 'No document found with that ID.'});
            }
            return res.status(200).json({message: 'Document deleted successfully.'});
        } catch (error) {
            // If an error occurred during the deletion process, return an error message
            return res.status(500).json({message: 'An error occurred while deleting the document.', error});
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
exports.deleteAdminStudent = async (req, res) => {
    try {
        const id = req.params.id;

        try {
            const deletedDoc = await StudentModel.findByIdAndDelete(id);

            if (!deletedDoc) {
                return res.status(404).json({message: 'No document found with that ID.'});
            }
            return res.status(200).json({message: 'Document deleted successfully.'});
        } catch (error) {
            // If an error occurred during the deletion process, return an error message
            return res.status(500).json({message: 'An error occurred while deleting the document.', error});
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// exports.getProf

