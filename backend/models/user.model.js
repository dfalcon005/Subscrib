const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    subscriptions: {
        type: Array,
        required: true
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;