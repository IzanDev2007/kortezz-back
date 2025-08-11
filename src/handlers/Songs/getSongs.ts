import Song from "../../models/Song";
import {Request, Response} from "express";

export const getSongs = async (_req: Request, res: Response) => {
    try{
        const allSongs = await Song.find()
        res.status(200).send(allSongs)
    }catch(e){
        res.status(500).json({
            status: "internal error"
        })
    }
}