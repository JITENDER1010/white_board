const express = require("express");
const app = express();
const server = require("http").createServer(app);
const {Server} = require("socket.io");
 const io = new Server(server);

//route
app.get("/" , (req , res) => {
    res.send("this is mern realtime board sharing app offical server ");
});

const port = process.env.PORT || 5000;
server.listen(port , ()=> console.log("server is running on http://localhost:5000"));

