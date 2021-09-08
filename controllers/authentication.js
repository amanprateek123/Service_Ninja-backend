const Consumer = require('../models/consumer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.consReg = async (req, res) => {
    try {
        const user1 = await Consumer.find({ phone: req.body.phone });
        const user2 = await Consumer.find({ email: req.body.email });
        if (user1.length>0) {
           res.json("User with this phone number is already exist");
           return;
        }
        if (user2.length>0) {
           res.json("User with this email is already exist");
           return;
        }
        const encryptPass = await bcrypt.hash(req.body.password, 10);
        const cons = new Consumer({...req.body, password: encryptPass});
        await cons.save();
        res.json(req.body);
    }
    catch (e) {
        res.json(e);
    }
}

exports.consLogin = async (req, res) => {
    try {
        const { phone, password } = req.body
        console.log(req.body)
        const user = await Consumer.find({ phone });
        if (user && (await bcrypt.compare(password, user[0].password))) {
            const token = jwt.sign({ user_id: user._id, phone }, 'jaimatadi');
            res.status(200).json(token);
        }
        res.status(400).send("Invalid Credentials");
    }
    catch (e) {
        res.json(e.message);
    }
}