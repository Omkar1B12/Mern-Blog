import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },

    profilePicture:{
        type:String,
        default:"https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
        
    },
},
    {timestamps:true}
);

const User=mongoose.model('User',userSchema);
export default User;