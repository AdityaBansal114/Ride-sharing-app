import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    fullName :{
        type: String,
        required: true
    },

    email :{
        type: String,
        required: true
    },

    password :{
        type: String,
        required: true,
        minlength: 6
    },

    gender:{
        type: String,
        required: true,
        enum: ["male","female"],
    },

    role: {
        type : String,
        required: true,
        enum :["student" , "instructor" , "admin"],
        default: "student"
    }
    
})

const User= mongoose.model("User",userSchema);

export default User;