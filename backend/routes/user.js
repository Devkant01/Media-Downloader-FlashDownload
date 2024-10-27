const express = require("express");
const aboutVideo = require("../controllers/aboutVideo");
const downloadVideo = require("../controllers/downloadVideo");

const userRouter = express.Router();

// Route for "/flash-download/user/show"
userRouter.post('/show', aboutVideo); 

// Route for "/flash-download/user/download"
userRouter.post('/download', downloadVideo);

module.exports = userRouter;
