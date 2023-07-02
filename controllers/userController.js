const mongoose = require('mongoose');
const {
    StudentModel,
    OstadModel,
    MosavvabModel,
    TermiModel,
    ModirITModel,
    ModirAmuzModel, TermModel, FacultyModel, PreRegisterModel, RegisterModel
} = require("../models/student");
const e = require("express");

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
            let stu = await StudentModel.findOne({faculty: req.faculty, idNumber: req.id});
            let ss = stu._id;
            const terms = await TermModel.find({faculty: req.faculty}).find({idNumbers: {$in: [ss]}});
            res.status(200).json(terms);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else if (req.role_id === 3) {
        try {
            let sos = await OstadModel.findOne({faculty: req.faculty, idNumber: req.id});
            let ssos = sos._id;
            const terms = await TermModel.find({faculty: req.faculty}).find({idNumbers: {$in: [ssos]}});
            console.log(typeof terms)
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
                const registration = await RegisterModel.findOne({termiCourses: {$in: [termi._id]}});
                let stus;
                stus = registration;
                return res.status(200).json(registration);
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

exports.getTermCourses = async (req, res) => {
    if (req.role_id === 3) {
        try {
            let spar = req.params.id;
            let term = await TermModel.findOne({_id: req.params.id});
            let ostad = await OstadModel.findOne({idNumber: req.id});
            let ostadLessons = [...ostad.teachedlessonsId, ...ostad.termlessonsId];
            const uniqueArr = ostadLessons.filter(element => ostadLessons.indexOf(element) === ostadLessons.lastIndexOf(element));
            const regis = term.termis;
            let stus = [];
            let commonArr = [];
            let termiCourse;
            let courses = [];

            for (const element of uniqueArr) {
                if (regis.indexOf(element) !== -1) {
                    termiCourse = await TermiModel.findOne({_id: element});
                    commonArr.push(termiCourse);
                }
            }


            // await commonArr.forEach(function (item) {
            //     const reg =await RegisterModel.find({term: req.params.id, termiCourses: {$in: [item]}});
            //     stus.push(reg);
            // });

            // for (const element of commonArr) {
            //     const req = await RegisterModel.find({term: spar, termiCourses: {$in: [element]}});
            //     stus.push(req);
            // }

            return res.status(200).json(commonArr);

        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else {
        res.status(403).json({message: 'who RU? han?'});
    }

}

exports.getTermRegCourse = async (req, res) => {
    if (req.role_id === 3) {
        try {
            let stus = [];
            let stuss = await RegisterModel.find({term: req.params.id, termiCourses: {$in: [req.params.idCourse]}});
            let esm2;
            for (const element of stuss) {
                let esm = element.studentId;
                esm2 = await StudentModel.findOne({_id: esm});
                stus.push(esm2.firstName + ' ' + esm2.lastName);
            }

            return res.status(200).json(stus);

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
            let spar = req.params.id;
            let term = await TermModel.findOne({_id: req.params.id});
            let ostad = await OstadModel.findOne({idNumber: req.id});
            let ostadLessons = [...ostad.teachedlessonsId, ...ostad.termlessonsId];
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
            // await commonArr.forEach(function (item) {
            //     const reg =await RegisterModel.find({term: req.params.id, termiCourses: {$in: [item]}});
            //     stus.push(reg);
            // });

            for (const element of commonArr) {
                const req = await RegisterModel.find({term: spar, termiCourses: {$in: [element]}});
                stus.push(req);
            }

            return res.status(200).json(stus);


        } catch (err) {
            res.status(500).json({message: err.message});
        }
    } else if (req.role_id === 2) {
        try {
            let idStudent = await StudentModel.findOne({idNumber: req.id});
            const register = await RegisterModel.findOne({studentId: idStudent._id, term: req.params.id});

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

        let ss = await OstadModel.findOne({idNumber: req.body.idNumber});
        if (ss) {
            const ostadsave = await OstadModel.findOneAndUpdate({idNumber: ss.idNumber}, req.body, {new: true});
            res.status(200).send(ostadsave).json;
        } else {
            await newProf.save().then((stud) => {
                console.log("inserted ostad");
                res.status(201).json(newProf);
                // return;
            }).catch(err => {
                console.log(err);
            })
        }


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
        let ss = await StudentModel.findOne({idNumber: req.body.idNumber});
        if (ss) {
            const ostadsave = await StudentModel.findOneAndUpdate({idNumber: ss.idNumber}, req.body, {new: true});
            res.status(200).send(ostadsave).json;
        } else {
            await newProf.save().then((stud) => {
                console.log("inserted student");
                res.status(201).json(newProf);
                // return;
            }).catch(err => {
                console.log(err);
            })
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.postAdminManager = async (req, res) => {
    try {
        const {firstName, lastName, idNumber, password, email, phone, faculty, rank} = req.body;
        const newProf = new ModirAmuzModel({
            firstName,
            lastName,
            idNumber,
            password,
            email,
            phone,
            faculty,
            rank
        });
        let ss = await ModirAmuzModel.findOne({idNumber: req.body.idNumber});
        if (ss) {
            const ostadsave = await ModirAmuzModel.findOneAndUpdate({idNumber: ss.idNumber}, req.body, {new: true});
            res.status(200).send(ostadsave).json;
        } else {
            await newProf.save().then((stud) => {
                console.log("inserted modireAmuzesh");
                res.status(201).json(newProf);
                // return;
            }).catch(err => {
                console.log(err);
            });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.postCourse = async (req, res) => {
    if (req.role_id === 1)
        try {
            if (req.body.capacity) {

                const newProf = new TermiModel(req.body);
                console.log(newProf)
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
            console.log(id)
            try {

                const coursesTerm = await TermiModel.findOne({_id: id});
                const currTerm = await TermModel.findOne({isNow: true, faculty: req.faculty});

                if (!coursesTerm) {
                    return res.status(404).json({message: `this course is not defined at term: ${id}`});
                } else {
                    const termis = currTerm.preregis;
                    const index = termis.indexOf(id);
                    if (!currTerm) {
                        return res.status(404).json({message: 'No current term found.'});
                    } else {
                        if (index > 0) {
                            return res.status(404).json({message: `this course `});
                        } else {
                            termis.push(id);
                            currTerm.termis = termis;
                            await currTerm.save();
                            return res.status(200).json({message: `course added to the Termi course: ${id}`});
                        }

                    }

                }

            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred while posting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}

exports.postFaculty = async (req, res) => {
    if (req.role_id === 0) {
        try {
            let new_Faculty = new FacultyModel(req.body);
            console.log("new faculty is  dbkdajkfabjfajbdkjbd naflkkdasmlkdasn sjdaljdjsijSDJOd" + new_Faculty)
            let ghabl = await FacultyModel.findOne({name: new_Faculty.name});

            console.log("new ghabl ljkdfjkhcahli SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS" + ghabl)

            if (ghabl) {
                const ostad = await FacultyModel.findOneAndUpdate({name: new_Faculty.name}, req.body, {new: true});

                console.log(ostad);
                console.log(5545454546464 + '??????????')
                res.status(200).send(ostad).json;
            } else {
                console.log(5545454546464 + '%%%%%%%%%%%%%%%%%%%%%')

                if (new_Faculty.name === '' || new_Faculty.name === null || new_Faculty.fields === null || new_Faculty.fields === []) {
                    console.log(5545454546464 + '><<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>> >>')

                    res.status(404).json({message: 'Invalid data provided'});
                } else {
                    await new_Faculty.save();
                    console.log(5545454546464 + 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM ')

                    console.log("he he is here new fac " + new_Faculty);
                    return res.status(200).json(new_Faculty);
                }
            }


        } catch (err) {
            res.status(500).json({message: 'An error occurred while saving the document.', error: err});
        }
    }
}

exports.postPreRegister = async (req, res) => {
    if (req.role_id === 2) {
        try {
            const id = req.params.id;
            try {
                console.log(req.faculty)
                const currTerm = await TermModel.findOne({isNow: true, faculty: req.faculty});
                if (!currTerm) {
                    return res.status(404).json({message: 'No current term found.'});
                }
                console.log(currTerm)
                let termis = currTerm.preregis;
                console.log(termis)
                let index = termis.indexOf(id);


                if (index < 0) {

                    // termis.push(id);
                    return res.status(404).json({message: 'we cannot let you have this you shall not pass'});
                } else if (index >= 0) {
                    let pree = new PreRegisterModel({
                        studentId: req.id,
                        termiCourses: req.params.id,
                        term: currTerm._id
                    });
                    pree.save();
                    return res.status(200).json({message: 'course added'});
                }
                // const nameofcours = termis[index];
                // await currTerm.save();
                return res.status(404).json({message: `how you have reached here???`});
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
            const termtmp = await TermModel.findOne({_id: req.params.id});
            if (termtmp.faculty === req.faculty)
                var term = await TermModel.findOneAndUpdate(
                    {_id: req.params.id}, req.body, {new: true}
                );
            res.status(200).json(term);
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
                const stu = await StudentModel.findOne({idNumber: req.id});
                const curTerm = await TermModel.findOne({isNow: true, faculty: req.faculty});

                let preis = await PreRegisterModel.findOne({studentId: req.id, term: curTerm._id});
                console.log(stu._id)

                let termis = preis.termiCourses;
                let index = termis.indexOf(id);
                if (!curTerm) {
                    return res.status(404).json({message: 'No current term found.'});
                }
                if (index < 0) {
                    return res.status(404).json({message: 'No termis course in current term found with that ID.'});
                }
                const nameofcours = termis[index];
                termis.splice(index, 1);//delete the index
                preis.termiCourses = termis;
                await preis.save();
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
                let currTerm = await TermModel.findOne({isNow: true, faculty: req.faculty});

                if (!currTerm) {
                    return res.status(404).json({message: 'No current term found.'});
                } else {
                    let termis = currTerm.preregis;
                    const index = termis.indexOf(id);
                    console.log(index)
                    if (index < 0) {
                        return res.status(404).json({message: 'No termis course in current term found with that ID.'});
                    } else {
                        const nameofcours = termis[index];
                        termis.splice(index, 1);//delete the index
                        currTerm.preregis = termis;
                        await currTerm.save();
                        return res.status(200).json({message: `Document deleted successfully. Term: ${nameofcours}`});
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


exports.postregistrationInTerm = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const id = req.params.id;

            try {
                let coursesTerm = await TermiModel.findOne({_id: id});
                let currTerm = await TermModel.findOne({isNow: true, faculty: req.faculty});
                let ostad = await OstadModel.findOne({_id: coursesTerm.ostad});
                let termis = currTerm.termis;
                let index = termis.indexOf(id);
                if (!coursesTerm) {
                    return res.status(404).json({message: `not found coursesTerm`});
                }
                if (!currTerm) {
                    return res.status(404).json({message: 'No current term found.'});
                }
                if (index > 0) {
                    termis.push(id);
                    currTerm.idNumbers.push(coursesTerm.ostad);
                    await currTerm.save();
                    ostad.termlessonsId.push(coursesTerm._id);
                    await ostad.save();
                    return res.status(404).json({message: `this course is already at the list of termi course: ${termis[index]}`});
                }
                ostad.teachedlessonsId.push()
                ostad.termlessonsId.push(coursesTerm._id);
                await ostad.save();
                termis.push(id);
                currTerm.termis = termis;
                currTerm.idNumbers.push(coursesTerm.ostad);
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
                const currTerm = await TermModel.findOne({isNow: true, faculty: req.faculty});

                if (!currTerm) {
                    return res.status(404).json({message: 'No current term found.'});
                } else {
                    let termis = currTerm.termis;
                    let index = termis.indexOf(id);
                    if (index < 0) {
                        return res.status(404).json({message: 'No termis course in current term found with that ID.'});
                    } else {
                        const nameofcours = termis[index];
                        termis.splice(index, 1);//delete the index
                        currTerm.preregis = termis;
                        await currTerm.save();
                        return res.status(200).json({message: `Document deleted successfully. Term: ${nameofcours}`});
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


exports.getpreregistrations = async (req, res) => { /// shak bar asar
    if (req.role_id === 1) {
        try {
            const id = req.params.id;

            try {
                let currTerm = await TermModel.findOne({_id: id, faculty: req.faculty});
                let termis = currTerm.preregis;
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
                let currTerm = await TermModel.findOne({isNow: true, faculty: req.faculty});
                console.log(currTerm);

                if (!currTerm) {
                    return res.status(404).json({message: 'No term found.'});
                }
                let preRegister = await PreRegisterModel.find({term: currTerm._id, termiCourses: {$in: [IdOfCourse]}});
                console.log(preRegister)
                if (!preRegister) {
                    return res.status(404).json({message: 'No preRegister found for the current term.'});
                }

                return res.status(200).json(preRegister);
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                return res.status(500).json({message: 'An error occurred with this doc.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}

exports.putregistration = async (req, res) => {
    if (req.role_id === 1) {
        try {
            const currTerm = await TermModel.findOne({isNow: true, faculty: req.faculty});
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
            const currTerm = await TermModel.findOne({isNow: true, faculty: req.faculty});
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
    let studentId;
    if (req.role_id === 2) {
        try {
            let IdOfcourse = req.params.id;

            let currTerm = await TermModel.findOne({isNow: true, faculty: req.faculty});
            let termis = currTerm.termis;
            let stu = await StudentModel.findOne({idNumber: req.id});
            let asghar = stu._id;
            let index = termis.indexOf(IdOfcourse);
            if (!currTerm) {
                return res.status(404).json({message: 'No current term found.'});
            }
            if (index < 0) {
                return res.status(404).json({message: 'No termis course in current term found with that ID.'});
            }
            let IdOfcurrTerm = currTerm._id;
            let Idofstudent = asghar;
            console.log(Idofstudent)
            if (!currTerm) {
                return res.status(404).json({message: 'No term found.'});
            }
            try {
                const registeration = await RegisterModel.findOne({studentId: Idofstudent, term: IdOfcurrTerm});
                console.log(registeration)

                if (!registeration) {
                    currTerm.idNumbers.push(Idofstudent);
                    await currTerm.save().then((stud) => {
                        console.log('idnumber added to term');
                    }).catch(err => {
                        console.log(err)
                    });
                    studentId = Idofstudent;
                    termiCourses = [IdOfcourse];
                    isApprovedFromStu = false;
                    isApprovedFromOst = false;
                    isApprovedFromModirAmuzesh = false
                    term = IdOfcurrTerm
                    const newRegisterModel = new RegisterModel({
                        studentId,
                        termiCourses,
                        isApprovedFromStu,
                        isApprovedFromOst,
                        isApprovedFromModirAmuzesh,
                        term
                    });
                    await newRegisterModel.save().then((stud) => {
                        console.log("inserted newRegister");
                        res.status(201).json(stud);
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    let termiCourse = registeration.termiCourses;
                    console.log(termiCourse)
                    let index = termiCourse.indexOf((IdOfcourse));
                    console.log(IdOfcourse)
                    if (index >= 0) {
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
            let stu = await StudentModel.findOne({idNumber: req.id});
            let idofstudent = stu._id;
            let currTerm = await TermModel.findOne({isNow: true, faculty: req.faculty});
            let IdOfcurrTerm = currTerm._id;
            let index = 0;
            if (!currTerm) {
                return res.status(404).json({message: 'No term found.'});
            }

            try {
                let registeration = await RegisterModel.findOne({studentId: idofstudent, term: IdOfcurrTerm});
                console.log(registeration)
                if (!registeration) {
                    return res.status(404).json({message: 'No registeration found. plz make a registeration'});
                }
                termiCourse = registeration.termiCourses;
                console.log(termiCourse)
                index = termiCourse.indexOf(idofcourse);
                if (index < 0) {
                    res.status(404).json({message: 'No termis course in current registeration found with that ID.'});
                }
                termiCourse.splice(index, 1);//delete the index
                registeration.termiCourses = termiCourse;
                console.log(termiCourse)

                await registeration.save().then().catch(err => {
                    console.log(err)
                });
                res.status(200).json({message: `course deleted from registeration successfully. Term:`});
            } catch (error) {
                // If an error occurred during the deletion process, return an error message
                console.log(error)
                res.status(500).json({message: 'An error occurred while deleting the document.', error});
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}


