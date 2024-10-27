const express = require("express");
const userRouter = require("./user");

const rootRouter = express.Router();

rootRouter.use('/user', userRouter);

rootRouter.get('/', (req, res) => {
    return res.send('Hi from app.js');
});

module.exports = rootRouter;