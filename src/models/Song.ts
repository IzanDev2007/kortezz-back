import mongoose from "mongoose";

export interface ISong  {
    title: string;
    image:string;
    url:string;
}

const songSchema = new mongoose.Schema({
    title:{type:String,required:true,trim:true},
    image:{type:String,required:true,trim:true},
    url:{type:String,trim:true},
})

const Song = mongoose.model<ISong>("song",songSchema);
export default Song;