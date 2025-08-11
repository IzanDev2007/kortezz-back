import mongoose from "mongoose";

export interface ILink {
    _id: string;
    url: string;
}

const linkSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    url: { type: String, required: true ,trim: true },
});

const Link = mongoose.model<ILink>("link", linkSchema);
export default Link;