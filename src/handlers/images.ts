import Image from "../models/Image";
import {Request, Response} from "express";

export const getImages = async (_req:Request,res:Response) => {
    try{
        const allImages = await Image.find()
        return res.status(200).send(allImages)
    }catch(err){}
        res.status(500).json({
            status: "internal error"
        })
}

export const uploadImage = async (req: Request, res: Response) => {
    try {
        const image = new Image(req.body);
        await image.save();

        const allImages = await Image.find();
        return res.status(201).send(allImages);
    } catch (err) {
        return res.status(500).json({
            status: "internal error"
        });
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