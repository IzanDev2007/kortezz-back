import Image from "../models/Image";
import {Request, Response} from "express";

export const getImages = async (_req:Request,res:Response) => {
    try{
        const allImages = await Image.find()
        res.status(200).send(allImages)
    }catch(err){}
        res.status(500).json({
            status: "internal error"
        })
}

export const uploadImage = async (req:Request, res:Response) => {
    try{
       const image = new Image(req.body);
       await image.save();

        res.status(201).json({ status: "created" });
    }catch(err){
        res.status(500).json({
            status: "internal error"
        })
    }
}

export const deleteImage = async (req:Request, res:Response) => {
    try{
        const {id} = req.params;
        await Image.findByIdAndDelete(id)
        res.status(200).send({status: "deleted"});
    }catch(err){
        res.status(500).json({
            status: "internal error"
        })
    }
}