import express from 'express';
import routes from './routes';
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db";
import { corsConfig } from "./config/cors";

export function createServer() {
    const app = express();

    connectDB();

    app.use(cors(corsConfig));

    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ limit: '10mb', extended: true }));

    app.use('/', routes);

    return app;
}
