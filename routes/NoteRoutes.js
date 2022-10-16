const noteModel = require('../models/NotesModel.js');
const express = require("express");

const app = express.Router();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content cannot be empty"
        });
    }
    //TODO - Write your code here to save the note
    try {
        const newNote = new notesModel(req.body);
        const note = await newNote.save();
        res.status(201).send(note);
    } catch (error) {
        res.status(400).send({message: "Note content can not be empty", "error": error});
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async (req, res) => {
    // Validate request
    try {
        const notes = await NotesModel.find();
        res.status(200).send(notes);
    } catch (error) {
        res.status(400).send({message: "Notes could not be retrieved", "error": error});
    }
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "Note content cannot be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    try {
        const note = await NotesModel.findById(req.params.noteId);
        res.status(201).send(note);
    } catch (error) {
        res.status(400).send({message: "Note content can not be empty", "error": error});
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "Note content cannot be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    try { 
        const note = await NotesModel.findByIdAndUpdate(req.params.noteId, req.body);
        res.status(201).send(note);
    } catch (error) {
        res.status(400).send({message: "Note content can not be empty", "error": error});
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to delete the note using noteid
    try { 
        const note = await NotesModel.findByIdAndRemove(req.params.noteId);
        res.status(204).send({message: "Note deleted"});
    } catch (error) {
        res.status(400).send({message: "Note cannot be found", "error": error});
    }
    
});

module.exports = routes;