var express = require('express');
const mongoose = require("mongoose");
const cors = require('cors')
mongoose.connect("mongodb://127.0.0.1:27017/sneh", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

const patientSchema = {
    name: String,
    age: Number,
    bloodgroup: String,
    admittedDate: String,
    address: String,
    billpayment: Boolean,

 };

 const Patient = mongoose.model("Patient", patientSchema);

var app = express();
app.use(cors());
app.use(express.json());

app.get('/getall', async function (req, res) {
   const data=await Patient.find().select()
    res.json(data);
})

app.post("/addpatient", async function (req, res) {
    const patient = new Patient({
      
        name: req.body.name,
        age:req.body.age,
        bloodgroup: req.body.bloodgroup,
        admittedDate: req.body.admittedDate,
        address: req.body.address,
    });
    await patient.save();
    res.send("sucess");
 });

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})