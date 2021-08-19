import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    food: {type:mongoose.Types.ObjectId, ref:"Foods"},
    restaurant: {type:mongoose.Types.ObjectId, ref:"Restaurant"},
    user:{type:mongoose.Types.ObjectId, ref:"Users"},
    rating:{ type: Number, required: true},
    reveiwText:{ type: String, required: true },
    photos:[
        {
            type:mongoose.Types.ObjectId, 
            ref:"Images",
        },
    ],
},
{
    timestamps: true,
},
);


export const ReviewModel = mongoose.model("Review", ReviewSchema);