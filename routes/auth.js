const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { generateAccessToken } = require('../utils/accessTokens')

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    let user = await User.findOne({ email })
    if (!user) {
        return res.status(403).json({ message: 'User not found' })
    }
    const isMatch = bcrypt.compareSync(password, user.password)
    if (!isMatch) {
        return res.status(403).json({ message: 'Password Incorrect' })
    }
    const token = generateAccessToken(user)
    // res.cookie('a1', 'token', { httpOnly: false, secure: true, signed: true })
    // res.cookie('b2', 'token2', { httpOnly: false, secure: true, signed: false })
    res.cookie('accessToken', token, { httpOnly: false, secure: true, signed: true })
    // res.cookie('accessToken', token, { httpOnly: false, secure: true, signed: true, maxAge: '20000' })
    res.status(200).json('Token generated successfully')

})

router.get('/logout', (req, res) => {
    res.send('Logging out')
})

router.post('/register', async (req, res) => {
    const { userName, email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: 'Email Id already taken' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        user = new User({ userName, email, password: hashedPassword })
        await user.save()
        res.status(201).json({ id: user._id, userName, email })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router