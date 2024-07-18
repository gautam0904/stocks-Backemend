import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import { errMSG } from "../Constant/message";

const roleValues = ['stockManger' , 'admin','storeRetailer']

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true , errMSG.REQUIRED('User name')],
    },
    email : {
        type : String,
        required : [true , errMSG.REQUIRED('User email')],
        unique : true
    },
    password : {
        type : String,
        required : [true , errMSG.REQUIRED('User password')]
    },
    profilePicture :  {
        type : String,
    },
    role : {
        type : String,
    },
},{timestamps : true});

userSchema.pre('save' , function(){
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password , 10);
    }
})

const User = mongoose.model('User' , userSchema);

export default User;