import mongoose from "mongoose";

const UserSchema = new.mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String },
    address: [{ detail : {type: String}, for: { type: String } }],
    phoneNUmber: [{type: number }],
},
{
    timestamps: true,
},
);


export const UserModel = mongoose.model("User", UserSchema);