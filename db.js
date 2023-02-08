const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.DATABASE,{useUnifiedTopology:true,useNewUrlParser:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to db'));
db.once('open', function(){
    console.log('Successfully connected to database');
});

var HabitSchema= new mongoose.Schema({
    Name:String,
    ID: String,
    BestStreak:Number,
    Current: Number,
    TotalDone: Number,
    TotalTracked: Number,
    Time: String,
    DoneDates:[String],
    NotDoneDates:[String],
})

var Habit = mongoose.model('Habit', HabitSchema);

module.exports = Habit;   