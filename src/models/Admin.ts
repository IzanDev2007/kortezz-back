import mongoose from "mongoose";

export interface IAdmin {
    name: string;
    password: string;
}

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true ,trim: true },
    password: { type: String, required: true,trim: true },
})

const Admin = mongoose.model<IAdmin>('admin', adminSchema);

export default Admin;