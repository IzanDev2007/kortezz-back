import Song from "../../models/Song";
import { Request, Response } from "express";

export const addSong = async (req: Request, res: Response) => {
    try {
        const song = new Song(req.body);
        await song.save();

        res.status(201).json({ status: "created" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ status: "internal error" });
    }
};
