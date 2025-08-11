import Event from "../models/Event";
import {Request, Response} from "express";

export const getEvent = async (_req:Request,res:Response) => {
    try{
        const events = await Event.find()
        res.status(200).send(events)
    }catch(err){
        res.status(500).json({
            status: "internal error"
        })
    }
}

export const addEvent = async (req: Request, res: Response) => {
    try {
        console.log('Cuerpo recibido en addEvent:', req.body);

        const event = new Event(req.body);
        await event.save();

        console.log('Evento guardado correctamente');

        res.status(201).json({ status: 'created' });
    } catch (error) {
        console.error('Error al crear evento:', error);
        res.status(500).json({ status: 'error', message: (error as Error).message });
    }
};


export const deleteEvent = async (req:Request,res:Response) => {
    try{
        const {id} = req.params
        await Event.findByIdAndDelete(id)
        res.status(200).send({
            status: "deleted"
        })
    }catch(err){
        res.status(500).json({
            status: "internal error"
        })
    }
}