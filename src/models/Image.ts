import mongoose from "mongoose";

type TImage = {
    image: string;
}

const imageSchema = new mongoose.Schema<TImage>({
    image: { type: String, required: true },
})

const Image = mongoose.model<TImage>("Image", imageSchema)

export default Image;