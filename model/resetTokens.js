const mongoose = require('mongoose');

const resetTokens = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: () => Date.now(),
    },

    expire_at: { type: Date, default: Date.now, expires: 1800000 }
});

module.exports = mongoose.model('ResetTokens', resetTokens);