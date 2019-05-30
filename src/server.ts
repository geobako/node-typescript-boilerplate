import http from 'http'
import app from './app'
import socketio from 'socket.io'


const server = new http.Server(app)

const io = socketio(server)

/*
set io in every request
*/
app.use(function (req, res, next) {
    req.io = io;
    next();
});


io.on('connection', async (socket) => {
    console.log('a user connected');
    console.log(socket)
});





const port = process.env.PORT || 5000

server.listen(port, () => console.log(`Server is up on port ${port}`))
