const jwt=require('jsonwebtoken')
const JWT_SECRET='assignment_completed'

const encrypt = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

const decrypt = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
  
}

module.exports = {
  encrypt,
  decrypt
}
