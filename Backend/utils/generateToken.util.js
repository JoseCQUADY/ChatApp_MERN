import jwt from 'jsonwebtoken';


const _generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
    
    return token
}


const setCookie = (userId, res) => {
    const token = _generateToken(userId);

    res.cookie('token', token, {
        maxAge: new Date(Date.now() + 8 * 3600000),
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV !== 'development'
    });
}

export default setCookie;