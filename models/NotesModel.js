const mongoose = require('mongoose');
//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true,
        enum: ['HIGH', 'LOW', 'MEDIUM']
    },
    dateAdded: {
        type: Date,
        required: true
    },
    dateUpdated: {
        type: Date,
        required: true
    }
});



module.exports = mongoose.model('Note', NoteSchema);