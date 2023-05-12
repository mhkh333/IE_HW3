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
    if (req.role_id === 0)
        try {
            const students = await StudentModel.find({});
            res.status(200).json(students);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    else if (req.role_id === 1) {
        try {
            const students = await StudentModel.find({faculty: req.faculty});
            res.status(200).json(students);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(403).json({message: 'forbidden'});
    }
};

exports.getStudentID = async (req, res) => {
    if (req.role_id === 0)
        try {
            const student = await StudentModel.findOne({idNumber: req.params.id});
            res.status(200).json(student);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    else if (req.role_id === 1) {
        try {
            const student = await StudentModel.findOne({idNumber: req.params.id, faculty: req.faculty});
            res.status(200).json(student);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(403);
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
    if (req.role_id === 2) {
        try {
            // student
            let course = [];
            const courses = await MosavvabModel.find({faculty: req.faculty, released: 'YES'});
            const coursesTerm = await TermiModel.find({faculty: req.faculty, released: 'YES'});
            course.push(courses);
            course.push(coursesTerm);
            res.status(200).json(course);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else if (req.role_id === 1) {
        try {
            let course = [];
            const courses = await MosavvabModel.find({faculty: req.faculty});
            const coursesTerm = await TermiModel.find({faculty: req.faculty});
            course.push(courses);
            course.push(coursesTerm);
            res.status(200).json(course);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else if (req.role_id === 3) {
        try {
            let course = [];
            const courses = await MosavvabModel.find({faculty: req.faculty});
            const coursesTerm = await TermiModel.find({faculty: req.faculty});
            course.push(courses);
            course.push(coursesTerm);
            res.status(200).json(course);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(403).json({message: 'who r u???????'});
    }
}

exports.getCourseId = async (req, res) => {
    if (req.role_id === 2) {
        try {
            // student
            let course = [];
            const courses = await MosavvabModel.findOne({_id: req.params.id, faculty: req.faculty, released: 'YES'});
            const coursesTerm = await TermiModel.findOne({_id: req.params.id, faculty: req.faculty, released: 'YES'});
            course.push(courses);
            course.push(coursesTerm);
            res.status(200).json(course);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else if (req.role_id === 1) {
        try {
            let course = [];
            const courses = await MosavvabModel.findOne({_id: req.params.id, faculty: req.faculty});
            const coursesTerm = await TermiModel.findOne({_id: req.params.id, faculty: req.faculty});
            course.push(courses);
            course.push(coursesTerm);
            res.status(200).json(course);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else if (req.role_id === 3) {
        try {
            let course = [];
            const courses = await MosavvabModel.findOne({_id: req.params.id, faculty: req.faculty});
            const coursesTerm = await TermiModel.findOne({_id: req.params.id, faculty: req.faculty});
            course.push(courses);
            course.push(coursesTerm);
            res.status(200).json(course);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(403).json({message: 'who r u???????'});
    }
}

////// Modire Amuzesh END

exports.getProfID = async (req, res) => {
    if (req.role_id === 0)
        try {
            const Prof = await OstadModel.findOne({idNumber: req.params.id});
            res.status(200).json(Prof);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    else if (req.role_id === 1) {
        try {
            const Prof = await OstadModel.findOne({idNumber: req.params.id, faculty: req.faculty});
            res.status(200).json(Prof);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(400);
    }
};

exports.getManagerID = async (req, res) => {
    try {
        const Prof = await ModirAmuzModel.findOne({idNumber: req.params.id});
        res.status(200).json(Prof);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};


exports.getAdminProfessors = async (req, res) => {
    if (req.role_id === 0)
        try {
            const students = await OstadModel.find({});
            res.status(200).json(students);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    else if (req.role_id === 1) {
        try {
            const students = await OstadModel.find({faculty: req.faculty});
            res.status(200).json(students);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(400);
    }
}

exports.getManagers = async (req, res) => {
    try {
        const students = await ModirAmuzModel.find({});
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
            res.status(201).json(newProf);
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
            res.status(201).json(newProf);
            // return;
        }).catch(err => {
            console.log(err);
        })

    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.postAdminManager = async (req, res) => {
    try {
        const {firstName, lastName, idNumber, password, email, phone, faculty} = req.body;
        const newProf = new ModirAmuzModel({
            firstName,
            lastName,
            idNumber,
            password,
            email,
            phone,
            faculty
        });
        await newProf.save().then((stud) => {
            console.log("inserted modireAmuzesh");
            res.status(201).json(newProf);
            // return;
        }).catch(err => {
            console.log(err);
        });

    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.postCourse = async (req, res) => {
    if (req.role_id === 1)
        try {
            if (req.body.capacity) {
                const {
                    name,
                    pre,
                    ham,
                    vahed,
                    faculty,
                    released,
                    time_class,
                    exam_time,
                    exam_place,
                    ostad,
                    capacity,
                    term
                } = req.body;
                const newProf = new TermiModel({
                    name,
                    pre,
                    ham,
                    vahed,
                    faculty,
                    released,
                    time_class,
                    exam_time,
                    exam_place,
                    ostad,
                    capacity,
                    term
                });
                await newProf.save().then((stud) => {
                    console.log("inserted termy");
                    res.status(201).json(newProf);
                    // return;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                const {name, pre, ham, vahed, faculty, released} = req.body;
                const newProf = new MosavvabModel({
                    name,
                    pre,
                    ham,
                    vahed,
                    faculty,
                    released
                });
                await newProf.save().then((stud) => {
                    console.log("inserted termy");
                    res.status(200).json(newProf);
                    // return;
                }).catch(err => {
                    console.log(err);
                });
            }
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

exports.putAdminManager = async (req, res) => {
    try {
        const ostad = await ModirAmuzModel.findOneAndUpdate(
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
        if(!ostad){
            return res.status(404).json({message: 'not found'});
        }
        res.send(ostad).json;
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.putStuStu = async (req, res) => {
    try {
        if (/*req.email == req.body.email && req.password == req.body.password && req.body.email && req.body.password*/ req.params.id === req.userId) {
            const filter = {password: req.body.password, email: req.body.email, phone: req.body.phone};
            const stu = await StudentModel.findOneAndUpdate(
                {_id: req.params.id}, filter, {new: true}
            );
            res.send(stu).json;
        } else {
            res.status(401).json({message: 'password or email is not correct'});
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.putProPro = async (req, res) => {
    try {
        if (req.params.id === req.userId) {
            const filter = {password: req.body.password, email: req.body.email, phone: req.body.phone};
            const stu = await OstadModel.findOneAndUpdate(
                {_id: req.params.id}, filter, {new: true}
            );
            res.send(stu).json;
        } else {
            res.status(401).json({message: 'password or email is not correct'});
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.putCourse = async (req, res) => {
    if (req.role_id === 1)
        try {
            const ostad = await MosavvabModel.findOneAndUpdate(
                {_id: req.params.id}, req.body, {new: true}
            );
            const dars = await TermiModel.findOneAndUpdate(
                {_id: req.params.id}, req.body, {new: true}
            );
            if (ostad)
                res.send(ostad).json;
            else if (dars)
                res.send(dars).json;
        } catch (err) {
            res.status(500).json({message: err.message});
        }
}

exports.deleteCourse = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const id = req.params.id;

            try {
                let deletedDoc = await MosavvabModel.findByIdAndDelete(id);
                if (!deletedDoc) {
                    deletedDoc = await TermiModel.findByIdAndDelete(id);
                }
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
exports.deleteAdminManager = async (req, res) => {
    try {
        const id = req.params.id;

        try {
            const deletedDoc = await ModirAmuzModel.findByIdAndDelete(id);

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


