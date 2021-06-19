const { Router } = require('express')
const homeRouter = Router()

homeRouter.get('/', (req, res) => {
    // if (req.session.page_views) {
    //     req.session.page_views++;
    //     console.log('sessionID: ', req.sessionID)
    //     res.send("You visited this page " + req.session.page_views + " times");
    // } else {
    //     req.session.page_views = 1;
    //     console.log('sessionID: ', req.sessionID)
    //     res.send("Welcome to this page for the first time!");
    // }
    res.send('HOME PAGE')
})

module.exports = homeRouter