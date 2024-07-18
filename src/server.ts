import 'reflect-metadata';
import express from 'express'
import dotenv from 'dotenv';
import { InversifyExpressServer } from 'inversify-express-utils';
import cors from 'cors';
import container from './inversify.config'
import { connectDB } from './DB/index';
import { errMSG, MSG } from './Constant/message'

dotenv.config();

const server = new InversifyExpressServer(container)

server.setConfig((app: express.Application) => {
    app.use(express.json());
    app.use(express.static('public'));
    app.use(cors({
        origin: '*',
        credentials: true
    }));
});

const app = server.build();

connectDB().then(() => {
    app.listen(process.env.port, () => {
        console.log(MSG.SERVERLISTEN, process.env.port)
    })
}).catch((e: any) => {
    console.log(errMSG.CONNECTDB, e)
})