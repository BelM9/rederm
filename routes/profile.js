var express = require('express');
var router = express.Router();

//Auth0 connect
const { requiresAuth } = require('express-openid-connect');

/* GET profile page. */
router.get('/', requiresAuth(), (req, res) => {
    res.render('profile', { title: 'Profile', user: req.oidc.user })
})

module.exports = router;