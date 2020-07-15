const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: { type: String },
    date_purchased: { type: Date },
    sub_type: { type: String },
    trial_ending: { type: Date },
    payment_type: { type: String },
    payment_freq: { type: String },
    sub_payment: { type: Number },
    auto_pay: { type: Boolean },
    annual_payment: { type: Number }
}, {
    timestamps: true
});

const Subscription = mongoose.model('Subsription', subSchema);

module.exports = Subscription;