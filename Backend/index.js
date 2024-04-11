import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messagesRoutes from './routes/messages.routes.js';
import mongoDbConnection from './db/mongoDbConnection.js';
import usersRoutes from './routes/users.routes.js';
import cookieParser from 'cookie-parser';
import {app, server} from './socket/socket.js';
import path from 'path';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

dotenv.config({ path: './.env'});

//Node js body parser
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/users', usersRoutes);

app.use(express.static(path.join(__dirname, '/FrontEnd/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'FrontEnd', 'dist', 'index.html'));
});

server.listen(PORT, () => {
    mongoDbConnection();
    console.log(`Server is running on port ${PORT}`);
});
