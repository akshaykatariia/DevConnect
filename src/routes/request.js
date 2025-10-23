const express = require("express");
const requestRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
// const ConnectionRequest = require("../models/connectionRequest");
// const User = require("../models/user");

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
    // Sending a connection request
    console.log("Sending a connection request");
    res.send("Connection Request Sent!");
});


module.exports = requestRouter;
