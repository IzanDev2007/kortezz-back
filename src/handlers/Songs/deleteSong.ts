import Song from "../../models/Song";
import {Request, Response} from "express";
export const deleteSong = async  (req:Request,res:Response) => {
    try{
        const {id} = req.params;
        await Song.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
        })
    }catch(e){
        res.status(500).send({error:"An error occurred"});
    }
}