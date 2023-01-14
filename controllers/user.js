import * as User from "../models/User.js";

export const getAll = async (req, res, next) => {
    try{
        const user = await User.getAll();
        res.json(user);
    }catch(err){
        next(err)
    }
};

export const create = async (req, res, next) => {
    try{
        const result = await User.create(req.body);
        res.status(201).json(result);

    }catch(err){
        next(err)
    }
}
export const get = async (req, res, next) => {
    try {
        const result = await User.get(req.params.userId);
        res.status(200).json(result);
    } catch(err) {
        next(err);
    };
}
export const replace = async (req, res, next) => {
    try {
        const result = await User.replace(req.params.userId, req.body)
        res.status(201).json(result)
    }catch(err) {
        next(err);
    };
};
export const update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.status(204).send()
        return
    }
    try {
        const result = await User.update(req.params.userId, req.body);
        res.status(201).json(result);
    }catch(err) {
        next(err);
    }; 
};
export const deleteOne = async (req, res, next) => {
    try{
        await User.deleteOne(req.params.userId)
        res.status(204).send()
    }catch(err) {
        next(err);
    };
}