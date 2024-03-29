import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoutes = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        
        if (!token) return res.status(401).json({ message: "Unauthorized" });

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!decodedToken) return res.status(401).json({ message: "Unauthorized" });

        const user = await User.findById(decodedToken.userId).select('-password');
        
        if (!user) return res.status(404).json({ message: "User not found" });

        req.user = user;
        
        next();
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

};

export default protectRoutes;