const express = require('express');
const mongoose = require('mongoose');

const Note = require('../models/noteModel');

const router = express.Router();

const getNotes = async (req, res) => {
    try {
        const note= await Note.find();
        
        res.status(200).json(note);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getSpecNote = async (req,res) => {
    const id = req.params.id;

    try {
        const note = await Note.findOne({_id: id});

        res.status(200).json(note);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createNote =  async (req, res) => {
    console.log(req.body);
    const newNote = new Note({
        note:req.body.note,
        checked:false,
    })
    try {
        await newNote.save();

        res.status(201).json(newNote);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updateNote = async (req, res) => {
    const id= req.params.id;
    try{
        await Note.findOneAndUpdate({
            _id: id,
        },
        {
            note:req.body.note,
            checked:req.body.checked,
        }
        )
        res.status(202).json({id: id});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deleteNote = async (req, res) => {
    const id= req.params.id;

    try {
        await Note.findOneAndRemove({_id: id});
        res.status(203).json({id: id});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getNotes= getNotes;
module.exports.createNote= createNote;
module.exports.getSpecNote= getSpecNote;
module.exports.updateNote= updateNote;
module.exports.deleteNote= deleteNote;