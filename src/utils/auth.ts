import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const verifyPassword = (enteredPassword:string,password:string) => {
    return bcrypt.compare(enteredPassword, password);
}

export const generateJWT = async (payload:JwtPayload) => {
    return jwt.sign(payload,process.env.JWT_SECRET!,{
        algorithm: 'HS256',
        expiresIn: '1y',
    })
}