const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    note: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        required: true,
    },
})
var noteData = mongoose.model('notes',noteSchema); // The first attribute here tells mongoose which collection to insert the data into
module.exports= noteData;