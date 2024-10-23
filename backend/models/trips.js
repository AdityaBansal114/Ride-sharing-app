import mongoose from "mongoose";

const userSchema= new mongoose.Schema({

    
    

    
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

ride_status = [created, started, completed]