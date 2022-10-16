const express = require('express')
const NoteModel = require('../models/NotesModel');
const router = express.Router()

//TODO - Create a new Note
// DONE
router.post('/notes', async (req, res) => {
    console.log(req.body)
    // Validate request
    if(!req.body.noteTitle) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    const note = new NoteModel(req.body)
    try {
        await newNote.save()
        res.send(note)
    } catch (error) {
        res.status(500).send(error)
    }
});

//TODO - Retrieve all Notes
// DONE
router.get('/notes', async(req, res) => {
    try {
        const notes = await NoteModel.find({})
        res.send(notes)
    } catch (error) {
        res.status(500).send(error)
    }
    
});

// TODO - Retrieve a single Note with noteId
// DONE
router.get('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "ID is missing."
        });
    }
    try {
        const note = await NoteModel.findById(req.params.noteId).exec();
        res.status(200).send(note);
    } catch (error) {
        res.status(500).send({
            error: "Something went wrong when dealing with the database."
        })
    }
});

//TODO - Update a Note with noteId
// DONE
router.put('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "ID is missing."
        });
    }
    if(!req.body.noteTitle) {
        return res.status(400).send({
            message: "Title is missing."
        });
    }

    try {
        const note = await NoteModel.findByIdAndUpdate(req.params.noteId, 
            {noteTitle: req.body.noteTitle});

        if(!note)
        res.status(404).send({message: "Note not found with id " + req.params.noteId});
        res.status(200).send(note);
    }
    catch(error) {
        res.status(500).send(error);
    }
});

//TODO - Delete a Note with noteId
// DONE
router.delete('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "ID is missing."
        });
    }
    try {
        const note = await NoteModel.findByIdAndRemove(req.params.noteId);
        res.status(200).send("Successfully deleted note with id " + req.params.noteId);
    } catch (error) {
        res.status(500).send({
            error: "Something went wrong when dealing with the database."
        })
    }
});

module.exports = router