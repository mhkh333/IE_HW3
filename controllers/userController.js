const mongoose = require('mongoose');
const {
    StudentModel,
    OstadModel,
    MosavvabModel,
    TermiModel,
    ModirITModel,
    ModirAmuzModel, TermModel, FacultyModel, PreRegisterModel, RegisterModel
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

exports.getTerms = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const terms = await TermModel.find({faculty: req.faculty});
            res.status(200).json(terms);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else if (req.role_id === 2) {
        try {
            const terms = await TermModel.find({faculty: req.faculty}).find({idNumbers: {$in: [req.id]}});
            res.status(200).json(terms);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else if (req.role_id === 3) {
        try {
            const terms = await TermModel.find({faculty: req.faculty}).find({idNumbers: {$in: [req.id]}});
            res.status(200).json(terms);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }

}

exports.getTermID = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const term = await TermModel.findOne({_id: req.params.id});
            if (req.faculty === term.faculty) {
                res.status(200).json(term);
            } else {
                res.status(403).json({message: 'wait a minute who are you?'});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(403).json({message: 'who RU? han?'});
    }

}

exports.getPreRegistrationCourses = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const term = await TermModel.findOne({_id: req.params.id});
            if (term) {
                res.status(200).json(term.preregis);
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else if (req.role_id === 2) {
        try {
            const term = await TermModel.findOne({_id: req.params.id});
            if (term) {
                res.status(200).json(term.preregis);
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(403).json({message: 'who RU? han?'});
    }

}

exports.getCoursePre = async (req, res) => {
    if (req.role_id === 3) {
        try {
            const termi = await TermiModel.findOne({_id: req.params.id});
            if (termi.faculty === req.faculty) {
                const registration = await RegisterModel.find({termiCourses: req.params.id});
                let stus = [];
                stus = registration.studentId;
                return res.status(200).json(stus);
            } else {
                res.status(403).json({message: 'what happende'});
            }

        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(403).json({message: 'who RU? han?'});
    }

}

exports.getTermReg = async (req, res) => {
    if (req.role_id === 3) {
        try {
            const term = await TermModel.findOne({_id: req.params.id});
            const ostad = await OstadModel.findOne({idNumber: req.id});
            const ostadLessons = [...ostad.teachedlessonsId, ...ostad.termlessonsId];
            const uniqueArr = ostadLessons.filter(element => ostadLessons.indexOf(element) === ostadLessons.lastIndexOf(element));
            const regis = term.termis;
            let stus = [];
            let commonArr = [];

            for (const element of uniqueArr) {
                if (regis.indexOf(element) !== -1) {
                    commonArr.push(element);
                }
            }

            let courses = [];
            await commonArr.forEach(function (item) {
                const reg = Register.find({term: req.params.id, termiCourses: {$in: [item]}});
                stus.push(reg);
            });

            return res.status(200).json(stus);


        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else if (req.role_id === 2) {
        try {
            const idStudent = req.id;
            const register = await RegisterModel.find({studentId: idStudent, term: req.params.id});

            return res.status(200).json(register);

        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(403).json({message: 'who RU? han?'});
    }

}


exports.postAdminProf = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            idNumber,
            password,
            email,
            phone,
            faculty,
            fieldOfStudy,
            rank,
            students,
            teachedlessonsId,
            termlessonsId
        } = req.body;
        const newProf = new OstadModel({
            firstName,
            lastName,
            idNumber,
            password,
            email,
            phone,
            faculty,
            fieldOfStudy,
            rank,
            students,
            teachedlessonsId,
            termlessonsId
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
            fieldOfStudy,
            ostad,
            passcoures

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
            fieldOfStudy,
            ostad,
            passcoures

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

exports.postTerm = async (req, res) => {
    if (req.role_id === 1) {
        try {

            const term = new TermModel(req.body);
            if (term.faculty !== req.faculty) {
                res.status(403).json({message: 'what is going on?'});
            } else {
                await term.save().then((stud) => {
                    console.log("term posted");
                    res.status(200).json(term);
                }).catch(err => {
                    console.log(err);
                });
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(403).json({message: 'who r u>?'});
    }
}

exports.postPreRegistration = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const id = req.params.id;

            try {
                const coursesTerm = await TermiModel.findOne({_id: id});
                const currTerm = await TermModel.find({isNow: True});
                const termis = currTerm.preregis;
                const index = termis.indexOf(id);
                if (!coursesTerm) {
                    return res.status(404).json({message: `this course is alredy at the list of termi course: ${id}`});
                }
                if (!currTerm) {
                    return res.status(404).json({message: 'No current term found.'});
                }
                if (index > 0) {
                    return res.status(404).json({message: `this course is alredy at the list of termi course: ${termis[index].name}`});
                }
                termis.push(id);
                currTerm.termis = termis;
                await currTerm.save();
                return res.status(200).json({message: `course added to the Termi course: ${id}`});
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}

exports.postPreRegister = async (req, res) => {
    if (req.role_id === 2) {
        try {
            const id = req.params.id;

            try {
                const currTerm = await TermModel.find({isNow: true, faculty: req.faculty});
                const termis = currTerm.preregis;
                const index = termis.indexOf(id);
                if (!currTerm) {
                    return res.status(404).json({message: 'No current term found.'});
                }
                if (index < 0) {
                    termis.push(id);
                    // return res.status(200).json(termis);
                } else if (index >= 0) {
                    return res.status(404).json({message: 'we had that course'});
                }
                // const nameofcours = termis[index];
                await currTerm.save();
                return res.status(200).json({message: `Document deleted successfully. Term:`});
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}

exports.putAdminProf = async (req, res) => {
    try {
        const ostad = await OstadModel.findOneAndUpdate(
            {idNumber: req.params.id}, req.body, {new: true}
        );
        if (!ostad) {
            return res.status(404).json({message: 'not found this ostad'});
        }
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
        if (!ostad) {
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

exports.putTerm = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const termtmp = await TermModel.findOne({_id: req.params});
            if (termtmp.faculty === req.faculty)
                const term = await TermModel.findOneAndUpdate(
                    {_id: req.params.id}, req.body, {new: true}
                );
        } catch (err) {
            res.status(500).json({message: err.message});
        }
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

exports.deleteTerm = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const id = req.params.id;

            try {
                const deletedDoc = await TermModel.findByIdAndDelete(id);

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

exports.deletePreReg = async (req, res) => {
    if (req.role_id === 2) {
        try {
            const id = req.params.id;
            try {
                const currTerm = await StudentModel.find({id: req.id});
                const preis = await PreRegisterModel.find({});
                const termis = currTerm.preregis;
                const index = termis.indexOf(id);
                if (!currTerm) {
                    return res.status(404).json({message: 'No current term found.'});
                }
                if (index < 0) {
                    return res.status(404).json({message: 'No termis course in current term found with that ID.'});
                }
                const nameofcours = termis[index];
                termis.splice(index, 1);//delete the index
                currTerm.preregis = termis;
                await currTerm.save();
                return res.status(200).json({message: `Document deleted successfully. Term: ${nameofcours}`});
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


// agha faridak

exports.deletepreregistration = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const id = req.params.id;

            try {
                const currTerm = await TermModel.find({isNow: true, faculty: req.faculty});
                const termis = currTerm.preregis;
                const index = termis.indexOf(id);
                if (!currTerm) {
                    return res.status(404).json({message: 'No current term found.'});
                }
                if (index < 0) {
                    return res.status(404).json({message: 'No termis course in current term found with that ID.'});
                }
                const nameofcours = termis[index];
                termis.splice(index, 1);//delete the index
                currTerm.preregis = termis;
                await currTerm.save();
                return res.status(200).json({message: `Document deleted successfully. Term: ${nameofcours}`});
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}


exports.postregistrationInTerm = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const id = req.params.id;

            try {
                const coursesTerm = await TermiModel.findOne({_id: id});
                const currTerm = await TermModel.find({isNow: True});
                const termis = currTerm.termis;
                const index = termis.indexOf(id);
                if (!coursesTerm) {
                    return res.status(404).json({message: `this course is alredy at the list of termi course: ${id}`});
                }
                if (!currTerm) {
                    return res.status(404).json({message: 'No current term found.'});
                }
                if (index > 0) {
                    return res.status(404).json({message: `this course is alredy at the list of termi course: ${termis[index].name}`});
                }
                termis.push(id);
                currTerm.termis = termis;
                await currTerm.save();
                return res.status(200).json({message: `course added to the Termi course: ${id}`});
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}


exports.getregistration_courses = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const id = req.params.id;

            try {
                const currTerm = await TermModel.findOne({_id: id});
                const termis = currTerm.termis;
                if (!currTerm) {
                    return res.status(404).json({message: 'No term found.'});
                }
                return res.status(200).json(termis);
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else if (req.role_id === 2) {
        try {
            const id = req.params.id;

            try {
                const currTerm = await TermModel.findOne({_id: id});
                const termis = currTerm.termis;
                if (!currTerm) {
                    return res.status(404).json({message: 'No term found.'});
                }
                return res.status(200).json(termis);
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(403).json({message: "wait a minute who are you?"});
    }
}


exports.deleteregistration = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const id = req.params.id;

            try {
                const currTerm = await TermModel.find({isNow: True, faculty: req.faculty});
                const termis = currTerm.preregis;
                const index = termis.indexOf(id);
                if (!currTerm) {
                    return res.status(404).json({message: 'No current term found.'});
                }
                if (index < 0) {
                    return res.status(404).json({message: 'No termis course in current term found with that ID.'});
                }
                const nameofcours = termis[index];
                termis.splice(index, 1);//delete the index
                currTerm.preregis = termis;
                await currTerm.save();
                return res.status(200).json({message: `Document deleted successfully. Term: ${nameofcours}`});
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}


exports.getpreregistrations = async (req, res) => { /// shak bar asar
    if (req.role_id === 1) {
        try {
            const id = req.params.id;

            try {
                const currTerm = await TermModel.findOne({_id: id, faculty: req.faculty});
                const termis = currTerm.preregis;
                if (!currTerm) {
                    return res.status(404).json({message: 'No term found.'});
                }
                res.status(200).json(termis);
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else if (req.role_id === 2) {
        try {
            const id = req.params.id;

            try {
                const currTerm = await TermModel.findOne({_id: id, faculty: req.faculty});
                const termis = currTerm.preregis;
                if (!currTerm) {
                    return res.status(404).json({message: 'No term found.'});
                }
                res.status(200).json(termis);
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(403).json({message: 'who r u?'});
    }
}


exports.getcoursepreregistrations = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const IdOfCourse = req.params.id;

            try {
                const currTerm = await TermModel.findOne({isNow: True});
                if (!currTerm) {
                    return res.status(404).json({message: 'No term found.'});
                }
                const preRegister = await PreRegister.find({term: currTerm.id, termiCourses: {$in: [IdOfCourse]}});

                if (!preRegister) {
                    return res.status(404).json({message: 'No preRegister found for the current term.'});
                }


                return res.status(200).json(preRegister);
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}

exports.putregistration = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const currTerm = await TermModel.findOne({isNow: True, faculty: req.faculty});
            const IdOfcurrTerm = currTerm.id;
            const IdOfstudent = req.params.id;
            if (!currTerm) {
                return res.status(404).json({message: 'No term found.'});
            }

            try {
                const filter = {isApprovedFromModirAmuzesh: req.body.isApprovedFromModirAmuzesh};
                const registeration = await RegisterModel.findOne({studentId: IdOfstudent, term: IdOfcurrTerm});
                if (!registeration) {
                    return res.status(404).json({message: 'No registeration found to update.'});
                }
                const regis = await RegisterModel.findOneAndUpdate({
                    studentId: IdOfstudent,
                    term: IdOfcurrTerm
                }, filter, {new: true});
                res.status(200).json(regis);
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
    if (req.role_id === 3) {
        try {
            const currTerm = await TermModel.findOne({isNow: True, faculty: req.faculty});
            const IdOfcurrTerm = currTerm.id;
            const IdOfstudent = req.params.id;
            if (!currTerm) {
                return res.status(404).json({message: 'No term found.'});
            }

            try {
                const filter = {isApprovedFromOst: req.body.isApprovedFromOst};
                const registeration = await RegisterModel.findOne({studentId: IdOfstudent, term: IdOfcurrTerm});
                if (!registeration) {
                    return res.status(404).json({message: 'No registeration found to update.'});
                }
                const regis = await RegisterModel.findOneAndUpdate({
                    studentId: IdOfstudent,
                    term: IdOfcurrTerm
                }, filter, {new: true});
                res.status(200).json(regis);
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }

}


exports.postcourseregister = async (req, res) => {
    if (req.role_id === 2) {
        try {
            const currTerm = await TermModel.findOne({isNow: True, faculty: req.faculty});
            const IdOfcurrTerm = currTerm.id;
            const IdOfcourse = req.params.id;
            const Idofstudent = req.id;
            if (!currTerm) {
                return res.status(404).json({message: 'No term found.'});
            }
            try {
                const registeration = await RegisterModel.findOne({studentId: Idofstudent, term: IdOfcurrTerm});
                if (!registeration) {
                    termiCourses = [IdOfcourse]
                    isApprovedFromStu = false;
                    isApprovedFromOst = false
                    isApprovedFromModirAmuzesh = true
                    term = IdOfcurrTerm
                    const newRegisterModel = new RegisterModel({
                        Idofstudent,
                        termiCourses,
                        isApprovedFromStu,
                        isApprovedFromOst,
                        isApprovedFromModirAmuzesh,
                        term
                    });
                    await newRegisterModel.save().then((stud) => {
                        console.log("inserted newRegister");
                        res.status(201).json(newProf);
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    const termiCourse = registeration.termiCourses;
                    const index = termiCourse.indexOf(IdOfcourse);
                    if (index > 0) {
                        return res.status(404).json({message: 'you have already registered at this course.'});
                    } else {
                        termiCourse.push(IdOfcourse)
                        registeration.termiCourses = termiCourse
                        await registeration.save();
                        res.status(201).json(registeration);
                    }
                }
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }

}


exports.deletecourseregister = async (req, res) => {
    if (req.role_id === 2) {
        try {
            const idofcourse = req.params.id;
            const idofstudent = req.id;
            const currTerm = await TermModel.findOne({isNow: True, faculty: req.faculty});
            const IdOfcurrTerm = currTerm.id;
            let index = 0;
            if (!currTerm) {
                return res.status(404).json({message: 'No term found.'});
            }

            try {
                const registeration = await RegisterModel.findOne({studentId: idofstudent, term: IdOfcurrTerm});
                if (!registeration) {
                    return res.status(404).json({message: 'No registeration found. plz make a registeration'});
                }
                termiCourse = registeration.termiCourses
                index = termiCourse.indexOf(idofcourse)
                if (index < 0) {
                    return res.status(404).json({message: 'No termis course in current registeration found with that ID.'});
                }
                termiCourse.splice(index, 1);//delete the index
                registeration.termiCourses = termiCourse;
                await registeration.save();
                return res.status(200).json({message: `course deleted from registeration successfully. Term: ${nameofcours}`});
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}


