let express = require("express");
let app = express();

const { v4:uuidv4 } = require('uuid')
let Habit = require('./db');

var cors = require('cors')
app.use(cors())

app.use(express.json());

app.get("/getData", (req,res)=>{
    Habit.find({}, function(err, data){
        if(err) throw err;
        res.json({habits:data})
    });
})

app.post("/setData", async (req, res) => {
    let data = req.body;
    let doc = await Habit.findOneAndUpdate({ ID: data.ID }, { ...data }, { new: true });
    console.log(doc, data);
    res.json({ habit: doc })
    // doc = { ...data };
    // await doc.save();
    // let doc = await Habit.findOneAndUpdate({ ID: data.ID }, { data }, { new: true })
    // Habit.find({}, function (err, data) {
    //     if (err) throw err;
    //     res.json({habits: data})
    // });

})


app.post("/add", (req, res) => {
    let data = { ...req.body }; // data = {name,Time}
    let ID = uuidv4()   
    data = {
        ...data, BestStreak: 0,
        Current: 0,
        TotalDone: 0,
        TotalTracked: 0,
        ID,
        DoneDates: [],
        NotDoneDates: [],
    }

    var newTodo = Habit(data).save(function (err, data) {
        if (err) throw err;
        res.json(data);
    });
    // habits = [data, ...habits];
    // console.log(data);
    // console.log(habits);
    //     res.send("success")

})



app.post("/delete", async (req, res) => {
    let data = req.body;
    let doc = await Habit.findOneAndDelete({ ID: data.ID });
    console.log(doc, data);
    res.json({ habit: doc })
    // habits = [data, ...habits];
    // console.log(data);
    // console.log(habits);
    //     res.send("success")
})






app.listen(5000,() => {console.log("Listening")})

