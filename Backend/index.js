import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messagesRoutes from './routes/messages.routes.js';
import mongoDbConnection from './db/mongoDbConnection.js';
import usersRoutes from './routes/users.routes.js';
import cookieParser from 'cookie-parser';
import {app, server} from './socket/socket.js';

const PORT = process.env.PORT || 3000;

dotenv.config({ path: './.env'});

//Node js body parser
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/users', usersRoutes);


server.listen(PORT, () => {
    mongoDbConnection();
    console.log('Server is running on port ' + PORT);
});

