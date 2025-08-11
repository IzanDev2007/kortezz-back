import mongoose from "mongoose";

interface IEvent {
    title: string;
    start: string;
    end: string;
    location: string;
    color: string;
}

const EventShema = new mongoose.Schema<IEvent>({
    title: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    location: { type: String },
    color: { type: String }
})

const Event = mongoose.model<IEvent>("Event", EventShema);
export default Event;