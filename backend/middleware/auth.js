const { verifyAuthToken } = require('../utils/authUtils');

function authenticate(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'No token provided, access denied' });
  }

  try {
    const decoded = verifyAuthToken(token); 
    req.user = decoded; 
    next(); 
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token, please log in again' });
  }
}

module.exports = authenticate;
