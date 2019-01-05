const express = require('express');
const socket = require('socket.io');

//set up 
const app = express();
const server = app.listen(4000,(err) =>{
    if(err) throw err;
    console.log('server running on localhost:4000')
})
//static files
app.use(express.static('public'))

//socket io
var io = socket(server)
//made connection
io.on('connection',(socket) =>{

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data)
    })

})