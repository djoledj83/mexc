const express = require('express');
const router = express.Router();

const User = require('../models/User');
const UserVerification = require('../models/UserVerification');

// Email handler modul

const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

// env 
require('dotenv').config();

// password handler
const bcrypt = require('bcrypt');
// const bcrypt = require('bcryptjs');


// path for staticnu stranu
const path = require('path');


// nodemailer stvari
const transporter = nodemailer.createTransport({
    host: "mail.t-4.me",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
});



// testing transporter

transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready for message");
        console.log(success);
    }
})



router.post('/signup', (req, res) => {
    let { name, email, password, dateOfBirth, accessKey, secretKey } = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth = dateOfBirth.trim();
    accessKey = accessKey.trim();
    secretKey = secretKey.trim();

    if (name == "" || email == "" || password == "" || dateOfBirth == "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    } else if (!/^[a-zA-Z ]*$/.test(name)) {
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        });
    } else if (!new Date(dateOfBirth).getTime()) {
        res.json({
            status: "FAILED",
            message: "Invalid date of birth entered"
        });
    } else if (password.length < 8) {
        res.json({
            status: "FAILED",
            message: "Invalid password length entered"
        });
    } else {
        User.find({ email })
            .then(result => {
                if (result.length) {
                    res.json({
                        status: "FAILED",
                        message: "User with provided email already exists"
                    });
                } else {
                    const saltRounds = 10;
                    // const saltRounds = bcrypt.genSaltSync(10);
                    bcrypt.hash(password, saltRounds)

                        .then(hashedPassword => {
                            const newUser = new User({
                                name,
                                email,
                                password: hashedPassword,
                                dateOfBirth,
                                verified: false,
                                accessKey,
                                secretKey
                            });
                            newUser.save()
                                .then(result => {
                                    // account verification

                                    sendVerificationEmail(result, res);

                                })
                                .catch(err => {
                                    res.json({
                                        status: "FAILED",
                                        message: "An error occurred while saving user account!"
                                    });
                                });
                        })
                        .catch(err => {
                            res.json({
                                status: "FAILED",
                                message: "An error occurred while hashing password!"
                            });
                        });
                }
            })
            .catch(err => {
                console.log(err);
                res.json({
                    status: "FAILED",
                    message: "An error occurred while checking for an existing user!"
                });
            });
    }
});

// Send email

const sendVerificationEmail = ({ _id, email }, res) => {
    // url koji cemo koristiti u emailu
    const currentUrl = "https://t-4.me/";

    const uniqueString = uuidv4() + _id;

    // mail options
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Verify your email",
        html: `<p>Verify your email to complete the signup and login to your account.</p><br><p>This link expires in 6 hours</b>.</p><p>Press <a href=${currentUrl + "user/verify/" + _id + "/" + uniqueString}>here</a> to proceed </p>`,
    };

    // hash unique string
    const saltRounds = 10;
    // const saltRounds = bcrypt.genSaltSync(10);
    bcrypt
        .hash(uniqueString, saltRounds)
        .then((hashedUniqueString) => {
            // set values in userverification
            const newVerification = new UserVerification({
                userId: _id,
                uniqueString: hashedUniqueString,
                createdAt: Date.now(),
                expiresAt: Date.now() + 21600000,
            });

            newVerification
                .save()
                .then(() => {
                    transporter.sendMail(mailOptions)
                        .then(() => {
                            // email sent and verification saved
                            res.json({
                                status: "PENDING",
                                message: "Verification email sent"
                            });
                        })
                        .catch((error) => {
                            console.log(error);
                            res.json({
                                status: "FAILED",
                                message: "Verification email failed!"
                            });
                        })
                })
                .catch((error) => {
                    console.log(error);
                    res.json({
                        status: "FAILED",
                        message: "Couldn't save verification email data!"
                    });
                })
        })
        .catch((error) => {
            console.log(error);
            res.json({
                status: "FAILED",
                message: "An error occurred while hashing email data!"
            });
        })
}


// verify email

router.get("/verify/:userId/:uniqueString", (req, res) => {
    let { userId, uniqueString } = req.params;

    UserVerification
        .find({ userId })
        .then((result) => {
            if (result.length > 0) {
                // verifikacija postoji
                const { expiresAt } = result[0];
                const hashedUniqueString = result[0].uniqueString;
                if (expiresAt < Date.now()) {
                    // record je istekao 
                    UserVerification
                        .deleteOne({ userId })
                        .then(result => {
                            User.deleteOne({ _id: userId })
                                .then(() => {
                                    let message = "Link has expired. Please sign up again";
                                    res.redirect(`/user/verified/error=true&message=${message}`);
                                })
                                .catch(error => {
                                    let message = "Clearing user with expired unique string failed.";
                                    res.redirect(`/user/verified/error=true&message=${message}`);
                                })
                        })
                        .catch((error) => {
                            console.log(error);
                            let message = "An error occurred while clearing expired user verification record";
                            res.redirect(`/user/verified/error=true&message=${message}`);
                        })

                } else {
                    // Valid record exist so we validate user string
                    // prvo poredimo hashed  unique string
                    bcrypt.compare(uniqueString, hashedUniqueString)
                        .then(result => {
                            if (result) {
                                // strings match
                                User
                                    .updateOne({ _id: userId }, { verified: true })
                                    .then(() => {
                                        UserVerification
                                            .deleteOne({ userId })
                                            .then(() => {
                                                res.sendFile(path.join(__dirname, "./../views/verified.html"));
                                            })
                                            .catch(error => {
                                                console.log(error);
                                                let message = "An error occurred while finalizing successfull verification";
                                                res.redirect(`/user/verified/error=true&message=${message}`);
                                            })

                                    })
                                    .catch(error => {
                                        console.log(error);
                                        let message = "An error occurred while updating user record to show verified.";
                                        res.redirect(`/user/verified/error=true&message=${message}`);
                                    })
                            } else {
                                // string missmatch postoji upis ali nisu dobri podaci poslati
                                let message = "Invalid verification passed. Check your inbox.";
                                res.redirect(`/user/verified/error=true&message=${message}`);
                            }
                        })
                        .catch(error => {
                            let message = "An error occurred while comparing unique strings";
                            res.redirect(`/user/verified/error=true&message=${message}`);
                        })

                }
            } else {
                let message = "Account record doesn't exist or has been verified already. Please sign up or login";
                res.redirect(`/user/verified/error=true&message=${message}`);
            }
        })
        .catch((error) => {
            console.log(error);
            let message = "An error occurred while checking for existing user verification record";
            res.redirect(`/user/verified/error=true&message=${message}`);
        })
});

// verified page route 
router.get("/verified", (req, res) => {
    res.sendFile(path.join(__dirname, "./../views/verified.html"));
})

router.post('/signin', (req, res) => {
    // Handle user signin logic
    let { email, password, } = req.body;
    email = email.trim();
    password = password.trim();

    // res.send("signin");


    if (email == " " || password == " ") {
        res.json({
            status: "FAILED",
            message: "Empty credentials supplied"
        });
    } else {
        User.find({ email })
            .then(data => {
                if (data.length) {
                    // user exist


                    // check if user is verified
                    if (!data[0].verified) {
                        res.json({
                            status: "FAILED",
                            message: "Email hasn't been verified yet. Check your inbox",
                        });
                    } else {
                        const hashedPassword = data[0].password;
                        bcrypt.compare(password, hashedPassword).then(result => {
                            if (result) {
                                if (result) {
                                    res.json({
                                        status: "SUCCESS",
                                        message: "Signin successful",
                                        data: data
                                    });
                                }
                            } else {
                                res.json({
                                    status: "FAILED",
                                    message: "Invalid password"
                                });
                            }
                        })
                            .catch(err => {
                                res.json({
                                    status: "FAILED",
                                    message: "An error occurred while comparing password"
                                });
                            });
                    }

                } else {
                    res.json({
                        status: "FAILED",
                        message: "Invalid credentials"
                    });
                }
            })
            .catch(err => {
                res.json({
                    status: "FAILED",
                    message: "An error accured while checking for existing user"
                });
            })

    }
});

module.exports = router; // Fixed the export statement
