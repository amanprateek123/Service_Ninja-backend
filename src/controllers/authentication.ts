import Consumer from '../models/consumer';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import {Request, Response} from 'express'
import {ICons} from '../types/Consumer'

const consReg = async (req: Request, res: Response): Promise<void> => {
    try {
        const user1: ICons[] = await Consumer.find({ phone: req.body.phone });
        const user2: ICons[] = await Consumer.find({ email: req.body.email });
        if (user1.length>0) {
           res.json("User with this phone number is already exist");
           return;
        }
        if (user2.length>0) {
           res.json("User with this email is already exist");
           return;
        }
        const encryptPass: string = await bcrypt.hash(req.body.password, 10);
        const cons: ICons | null = new Consumer({...req.body, password: encryptPass});
        await cons.save();
        res.json(req.body);
    }
    catch (e) {
        res.json(e);
    }
}

const consLogin = async (req:Request, res: Response): Promise<void> => {
    try {
        const { phone, password } = req.body
        console.log(req.body)
        const user = await Consumer.find({ phone });
        if (user && (await bcrypt.compare(password, user[0].password))) {
            const token = jwt.sign({phone}, 'jaimatadi');
            res.status(200).json(token);
        }
        res.status(400).send("Invalid Credentials");
    }
    catch (e) {
        console.log(e)
    }
}

export {consReg, consLogin}