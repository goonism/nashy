/**
 * Simple example of how to use the NextAuth module.
 *
 * To invoke next-auth you will need to define a configuration block for your
 * site. You can create a next-auth.config.js file and put all your options
 * in it and pass it to next-auth when calling init().
 *
 * A number of sample configuration files for various databases and
 * authentication options are provided.
 **/

// Load environment variables from .env
require('dotenv').load()

process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.PORT = process.env.PORT || 80

const Promise = require('bluebird');

// Include Next.js, Next Auth and a Next Auth config
const express = require('express')
const next = require('next')
const nextAuth = require('next-auth')
const nextAuthConfig = require('./auth/next-auth.config')

const mongoose = require('mongoose');
mongoose.Promise = Promise;
const userModel = require('./models/user');

mongoose.connect(process.env.MONGO_URI);
const userdb = new(userModel)(mongoose);

const dev = process.env.NODE_ENV !== 'production'

// Initialize Next.js
const app = next({dir: '.', dev})

const handle = app.getRequestHandler()

// Add next-auth to next app
app.prepare().then(() => nextAuthConfig()).then((options) => {
    // Pass Next.js App instance and NextAuth options to NextAuth
    return nextAuth(app, options);
}).then(({express, expressApp}) => {

    // Express raw middleware and what not here:

    expressApp.all('*', (req, res) => {
        req.userdb = userdb;

        return handle(req, res)
    });

    expressApp.listen(process.env.PORT, err => {
        if (err) {
            throw err
        }

        console.log(`> Ready on http://localhost:${process.env.PORT}[${process.env.NODE_ENV}]`)
    });

}).catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
});
