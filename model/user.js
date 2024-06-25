const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    apikey: { 
        type: String 
    },
    limitApikey: {
         type: Number 
    },
    isPremium: {
        type: Boolean,
        default: false,
    },
    expired: {
        type: Date,
        default: null,
    },
});

module.exports = mongoose.model('user', userSchema);
