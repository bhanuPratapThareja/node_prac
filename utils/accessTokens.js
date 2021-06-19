const jwt = require('jsonwebtoken')

const generateAccessToken = user => {
    const payload = { user: { id: user.id } }
    return jwt.sign(payload, process.env.JWT_SECRET)
    // return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '10000' })
}

const generateRefreshToken = user => {
    const payload = { user: { _id: user._id } }
    return jwt.sign(payload, process.env.JWT_SECRET)
}

module.exports = { generateAccessToken, generateRefreshToken }