import {Request,Response} from "express";
import {verifyPassword} from "../utils/auth";
import Admin from "../models/Admin";
import {generateJWT} from "../utils/auth";

export const login = async (req:Request, res: Response) => {
    try{
        const {name,password} =  req.body;

        const admin = await Admin.findOne({name})

        if(!admin){
            res.status(401).json({message:"incorrect credencials"});
            return;
        }

        const validPassword = await verifyPassword(password,admin.password)

        if(!validPassword){
            res.status(401).json({message:"incorrect credencials"});
            return;
        }

        const jwt = await generateJWT({id:admin._id});

        res.status(200).send(jwt);

    }catch(e){
        res.status(400).json({
            status: "error"
        })
    }
}