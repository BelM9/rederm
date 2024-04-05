const express = require('express')

//Auth0 connect
const { auth } = require('express-openid-connect');

//dotenv connect
require('dotenv').config()

// pages call
const index = require('./routes/index')
const profile = require('./routes/profile')

const app = express()


//ejs configuration 
app.set('view engine', 'ejs')

//Auth0 configuration 
const config = {
    authRequired: false,
    auth0Logout: true,
    //a long, randomly-generated string stored in env (in file .env)

    secret: 'hA1h7HPrNXZe7Gp3x25FrlnJ8n7J0RT6icKBvRa6StXiJExJLj7gaeqe7yvmk2Yz',
    baseURL: 'http://localhost:3000',
    clientID: '46f91BWttGOiCvzRxuYsLO41RmHa9Nks',
    issuerBaseURL: 'https://dev-wrhrh5dbm4ddcoao.us.auth0.com'
};


// settings
app.use(express.static('public'))

app.use(auth(config));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// pages
app.use('/', index)
app.use('/profile', profile)


//Auth0 isAuthenticated() ?
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

//server
app.listen(3000, () => {
    console.log('écoute à travers le port 3000')
})