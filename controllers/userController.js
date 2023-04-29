const mongoose = require('mongoose');
const {StudentModel, OstadModel} = require("../models/student");


exports.getStudents = async (req, res) => {
    try {
        const students = await StudentModel.find({});
        res.status(200).json(students);
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
