const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const { accessToken } = req.signedCookies
    console.log('req.signedCookies: ', req.signedCookies)
    if (!accessToken) {
        return res.status(401).json({ message: 'Missing access token' })
    }
    jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log('jwt err: ', err)
            return res.status(401).json({ message: err.message })
        }
        req.userId = decoded.user.id
        next()
    })
}