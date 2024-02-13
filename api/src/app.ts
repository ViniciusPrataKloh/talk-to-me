import express, { Application } from 'express';
import http from 'node:http';
import { Server, Socket } from 'socket.io';

class App {

  private app: Application;
  private http: http.Server;
  private io: Server;

  constructor() {
    this.app = express();
    this.http = new http.Server(this.app);
    this.io = new Server(this.http, {
      cors: {
        origin: '*'
      }
    });
  }

  private socketEvents(socket: Socket) {
    console.log(`Socket connected: ${socket.id}`);

    socket.on('subscribe', (data) => {
      console.log(`User connected: ${data.roomId}`);
      console.log(`User subscribed to room: ${data.socketId}`);

      socket.join(data.roomId);
      socket.join(data.socketId);

      const roomsSession = Array.from(socket.rooms);


      if (roomsSession.length > 1) {
        console.log({
          socketId: socket.id,
          username: data.username
        });
        socket.to(data.roomId).emit('new user', {
          socketId: socket.id,
          username: data.username
        });
      }
    });

    socket.on('new user start', (data) => {
      console.log('new user start', data);
      socket.to(data.to).emit('new user start', {
        sender: data.sender
      });
    });

    socket.on('sdp', (data) => {
      console.log('sdp offer', data);
      socket.to(data.to).emit('sdp', {
        description: data.description,
        sender: data.sender
      });
    });

    socket.on('chat', (data) => {
      socket.broadcast.to(data.roomId).emit('chat', {
        message: data.message,
        username: data.username,
        time: data.time,
      });
    });
  }

  public listen() {
    this.http.listen(3333, () => {
      console.log('Server is running on port 3333!');
    });
  }

  public listenSocket() {
    this.io.of('/streams').on('connection', this.socketEvents);
  }

}

export { App };