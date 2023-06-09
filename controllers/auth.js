// auth.js is a controller that handles the authentication of users
// path: controllers\auth.js

// Importing the required modules
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');


// aysnc function to register a user
async function register(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);

    // if there are errors in the validation, return the errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check if the user already exists
}

// async function to login a user
async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);

    // if there are errors in the validation, return the errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check if the user exists

    // check if the password is correct

    // create a token for the user

    // return the token

}

// exporting the functions

module.exports = {
    register,
    login
}

