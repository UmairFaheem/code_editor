import express from 'express'
import http from 'http'
import {Server} from "socket.io"
import cors from "cors"

const app = express();
const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const rooms = {};

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("create-room", (roomId) => {
    rooms[roomId] = { users: [] };
    socket.join(roomId);
    console.log(`Room created: ${roomId}`);
  });

  socket.on("join-room", ({ roomId, userId, fullName }) => {
    // if (rooms[roomId]) {
    //   socket.join(roomId);
    //   const user = { socketId: socket.id, userId }; // Store Clerk userId & socketId
    //   rooms[roomId].users.push(user);
  
    //   io.to(roomId).emit("user-joined", user); // Send full user object
    //   console.log(`User ${userId} (${socket.id}) joined room: ${roomId}`);
    // } else {
    //   socket.emit("error", "Room does not exist!");
    // }
    if (!rooms[roomId]) {
        rooms[roomId] = { users: [] };
      }
  
      const user = { socketId: socket.id, userId, fullName };
      rooms[roomId].users.push(user);
      socket.join(roomId);
  
      // Send updated user list to everyone in the room
      io.to(roomId).emit("user-joined", rooms[roomId].users);
  
      console.log(`User ${fullName} (${userId}) joined room: ${roomId}`);
  });

  socket.on("disconnect", () => {
    for (const roomId in rooms) {
      rooms[roomId].users = rooms[roomId].users.filter(
        (user) => user.socketId !== socket.id
      );
      io.to(roomId).emit("user-joined", rooms[roomId].users);
    }
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));
