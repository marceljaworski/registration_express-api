
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    movil: {
        type: Number,

    },
});


const User = mongoose.model("user", schema);

export const getAll = async () => {
    const users = await User.find();
    return users;
}


export const create = async (document) => {
    const newUser = new User(document);
    const result = await newUser.save();
    return result;
}
