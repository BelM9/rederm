const express = require('express');
const router = express.Router();

//Auth0 connect
const { requiresAuth } = require('express-openid-connect');

/* GET home page. */
router.get('/', requiresAuth(), (req, res) => {
    res.render('index', { title: 'index' })
})

module.exports = router;