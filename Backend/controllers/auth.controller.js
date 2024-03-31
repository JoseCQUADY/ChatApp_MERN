import User from "../models/user.model.js";
import { comparePassword, hashedPassword } from "../utils/hashPassword.util.js";
import setCookie from "../utils/generateToken.util.js";


export const signup = async (req, res) => {

    try {
        const { fullName, userName, email, password, confirmPassword, profilePicture } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password does not match"});
        } else if (password.length < 6) {
            return res.status(400).json({ message: "Password must be atleast 6 characters long" });
        }

        const user = await User.findOne({ userName });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const userProfile = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const passwordHashed = await hashedPassword(password);

        const newUser = new User({
            fullName,
            userName,
            email,
            password: passwordHashed,
            profilePicture: userProfile
        });

        if (newUser) {
            setCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({ fullName, userName, email, profilePicture: userProfile});
        } else {
            
            res.status(400).json({ error: "User registration failed"});
        }
    }
    catch (error) {
        res.status(400).json({ error: "User registration failed" });
    }
}

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        const user = await User.findOne({
            userName
        });

        const isPasswordMatch = await comparePassword(password, user?.password || '');

        if (!user || !isPasswordMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        setCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            email: user.email,
            profilePicture: user.profilePicture
        });



    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "User login failed" });
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(400).json({ error: "User logout failed" });
    }
}

