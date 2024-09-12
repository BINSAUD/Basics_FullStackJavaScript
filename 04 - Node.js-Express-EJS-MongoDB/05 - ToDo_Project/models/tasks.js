const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userId : {
        type: String
    }
});
module.exports = mongoose.model('task', schema);