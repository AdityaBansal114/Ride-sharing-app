import mongoose from "mongoose";

const userSchema= new mongoose.Schema({

    source : {
        type : Object,
        required : true
    },
    destination : {
        type : Object,
        required : true
    },
    waypoints : {
        type : Array,
        default : []
    },
    companions : {
        type : Array,
        default : []
    },
    available_seats : {
        type : Number,
        required : true
    },
    ride_creator : {
        type: String,
        required : true
    },
    cab_number: {
        type : String,
        required : true
    },
    driver_name : {
        type : String,
        required : true
    },
    driver_phone : {
        type : string,
    },
    ride_status  : {
        type : String,
        enum: ["active" , "unactive" , "completed"],
        default : "active"
    }
    
}, {timestamps: true})

const Trips= mongoose.model("Trips",userSchema);

export default Trips;

/*
TRIP SCHEMA

ride_creator
driver_name
cab_number
driver_phoneNo

source
destination
companion : []
available_seats

ride_status = [created, started, completed*/