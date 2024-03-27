import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messagesRoutes from './routes/messages.routes.js';
import mongoDbConnection from './db/mongoDbConnection.js';
import usersRoutes from './routes/users.routes.js';
import cookieParser from 'cookie-parser';
const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config({ path: './.env'});

//Node js body parser
app.use(cookieParser());
app.use(express.json());

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/users', usersRoutes);


app.listen(PORT, () => {
    mongoDbConnection();
    console.log('Server is running on port ' + PORT);
});

