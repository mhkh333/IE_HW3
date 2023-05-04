const mongoose = require('mongoose');
const {StudentModel, OstadModel, MosavvabModel, TermiModel, ModirITModel, ModirAmuzModel} = require("../models/student");



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

exports.getProfID = async (req, res) => {
    try {
        const Prof = await OstadModel.findOne({idNumber: req.params.id});
        res.status(200).json(Prof);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};
exports.getCourses = async (req, res) => {
    try{
        let course = [];
        const courses = await  MosavvabModel.find({});
        const coursesTerm = await  TermiModel.find({});
        course.push(courses);
        course.push(coursesTerm);
        res.status(200).json(course);
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

////// Modire Amuzesh END

// exports.postAdmProf

exports.getAdminProfessors = async (req, res) => {
    try{
        const students = await OstadModel.find({});
        res.status(200).json(students);
    }catch (err){
        res.status(500).json({message: err.message});
    }
}

