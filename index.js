let express = require("express")
let mongoose = require("mongoose")
let StudentModel = require("./models/Student")

let app = express()
//

mongoose.connect('mongodb+srv://sa:rrfYrY3mSzHSgzJR@cluster0.qa3t4.mongodb.net/db_f2021_comp3123?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get("/", (req, res) => {
    res.send("<h1>MongoDB mongoose Example</h1>")
})

//Insert New Student
app.get("/add", async (req, res) => {

    let s = {
        first_name: "Gustavo",
        last_name: "Beltran",
        total: 50,
        result:"PASS"
    }

    //Create student model object
    let new_student = new StudentModel(s)

    try{
        await new_student.save(s)
        console.log("Student Record Saved")
        res.status(200).send("Student Record Saved")
    }catch(err){
        console.log("ERROR: Student Record Saved: " + err)
        res.status(500).send(err)
    }
})

//Read student data
app.get("/students", async (req, res) => {
    //const s = await StudentModel.find({})
    //const s = await StudentModel.find({}, "first_name total")
    //const s = await StudentModel.find({total : 100}, "first_name total")
    //Sorting on Total
    //const s = await StudentModel.find({}, "first_name total").sort({total: -1})
    // total > 100
    const s = await StudentModel.find({ total:{$gt:100} }, "first_name total").sort({total: -1})
    try{
        res.send(s)
    }catch(err){
        console.log("Error: "+ err)
        res.status(500).send(err)
    }
})

app.listen(8089, () => {
    console.log("Server running at http://localhost:8089/")
})

