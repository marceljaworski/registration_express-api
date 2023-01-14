import * as Rgstr from "../models/Rgstr.js";

export const getAll = async (req, res, next) => {
    try{
        const rgstr = await Rgstr.getAll();
        res.json(rgstr);
    }catch(err){
        next(err)
    }
};

export const create = async (req, res, next) => {
    try{
        const result = await Rgstr.create(req.body);
        res.status(201).json(result);

    }catch(err){
        next(err)
    }
}
