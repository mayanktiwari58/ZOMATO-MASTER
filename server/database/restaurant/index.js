import mongoose from "mongoose";

const UserSchema = new.mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true },
    mapLocation: {type: String, required: true },
    cuisine: [String],
    restaurantTimming: String,
    contactNumber: Number,
    website:   String,
    popularDishes:[String],
    averageCost:Number,
    amenties:[String],
    menuImages:{
        type: mongoose.Type.ObjectId,
        ref: "Images"
    },
    menu:{
        type: mongoose.Type.ObjectId,
        ref: "Menu"
    },
    reviews:[{type: mongoose.Type.ObjectId, ref: "Reviews"}],
    photos:{type: mongoose.Type.ObjectId, ref: "Images"},
},
{
    timestamps: true,
},
);


export const Restaurant = mongoose.model("Restaurant", RestaurantSchema);