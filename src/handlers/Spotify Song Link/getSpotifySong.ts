import Link from "../../models/Link";
import {Request, Response} from "express";

export const getSpotifySong = async (req:Request,res:Response) => {
    try {
        const link = await Link.findById('spotifysong')
        if (!link) {
            res.status(404).send('No link with this id')
            return;
        }
        res.status(200).send(link);
    } catch (err) {
        res.status(400).send({error: err});
    }
}