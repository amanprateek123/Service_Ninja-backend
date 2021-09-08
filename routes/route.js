const express = require('express');
const authCtrl = require('../controllers/authentication');
const auth = require("../middleware/auth")

const router = new express.Router();

//user auth
router.post("/api/consumerReg", authCtrl.consReg);
router.post("/api/consumerLogin", authCtrl.consLogin);

router.post("/api/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});
module.exports = router;