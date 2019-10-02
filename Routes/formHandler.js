const router = require('express').Router();
require('dotenv').config({path: '../vars.env'});

var mailer = require("nodemailer");

router.post('/', (req, res) => {
    console.log(req.body);
    
    // Use Smtp Protocol to send Email
    var transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASSWORD
        }
    });
    
    var mail = {
        from: "ahmadtawfik.at1@gmail.com",
        to: "ahmadtawfik.at1@gmail.com",
        subject: "Send Email Using Node.js",
        text: "Node.js New world for me",
        html: "<b>Node.js New world for me</b>"
    }
    
    transporter.sendMail(mail, function(error, response){
        if(error){
            res.status(500).json({
                message: 'failed'
            });
            console.log(error);
        }else{
            res.status(200).json({
                message: 'sucess'
            });
            console.log("Message sent: ");
        }
        
        smtpTransport.close();
    });
    
});

module.exports = router;