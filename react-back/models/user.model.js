import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username:String,
    usermobile:Number,
    useremail:String,
    usercity:String,
    userstate:String,
    userpass:String,
});

const userModel = mongoose.model('users', userSchema);
export default userModel;