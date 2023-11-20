const { AutoIncrementID } = require("@typegoose/auto-increment");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const patientSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    age: Number,
    bloodgroup: String,
    mobileNumber: String,
    // id: Number,
    address: String,
    admits: [
        {
            type: Number,
            ref: "Admit"
        }
    ]
});

patientSchema.plugin(AutoIncrementID, {});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
