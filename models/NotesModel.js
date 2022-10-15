const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

//create noteTitle schema here
const noteTitle = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    }
});
//create noteDescription schema here
const noteDescription = new mongoose.Schema({
    noteDescription: {
        type: String,
        required: true
    }
});
//create priority schema here. value can be high, low or medium
const priority = new mongoose.Schema({
    priority: {
        type: String,
        required: true,
        enum: ['HIGH', 'LOW', 'MEDIUM']
    }
});
//create dateAdded schema here
const dateAdded = new mongoose.Schema({
    dateAdded: {
        type: Date,
        required: true
    }
});
//create dateUpdated schema here
const dateUpdated = new mongoose.Schema({
    dateUpdated: {
        type: Date,
        required: true
    }
});
