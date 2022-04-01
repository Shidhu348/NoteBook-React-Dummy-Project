const express = require('express');
const router = express.Router()
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


// Create a User using: POST endpoint"/api/createuser. No Login required


router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    // If there are errors return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exits already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ error: "Email with this user already exits" })
    }
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    // .then(user => res.json(user))
    //     .catch(err => {
    //         console.log(err)
    //         res.json({ error: "Please enter a unique value for email", message: err.message })
    //     })
    res.json({ "nice": "nice" });
})


module.exports = router