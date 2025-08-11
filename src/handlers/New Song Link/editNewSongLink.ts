import Link from "../../models/Link";
import {Request, Response} from "express";

export const editNewSongLink = async (req:Request,res:Response) => {
    try{
        const { url } = req.body;
        const result = await Link.updateOne(
            {_id: "newsong"},
            {$set: {url}}
        )

        if(result){
            res.status(200).json({success:true});
        }

    }catch(err){
        res.status(400).send({error:err});
    }

}