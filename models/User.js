
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: Number,

    },
    paswort: {
        type: String,
    }
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
export const get = async (userId) => {
    const user = await User.findById(userId);
    return user;
};
export const replace = async (userId, data) => {
    const user = await User.findOneAndReplace({_id: userId}, data, {returnDocument: "after", runValidators: true},);

    return user;
};
export const update = async (userId, data) => {
    const user = await User.findByIdAndUpdate(userId, data, {new: true, runValidators: true});

    return user;
};
export const deleteOne = async (userId) => {
    const user = await User.findByIdAndDelete(userId)

    return user;
};


