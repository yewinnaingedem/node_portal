const validator = require('validator');
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: validator.isEmail,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    location: {
        type: String,
        default: 'myanmar',
    }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);