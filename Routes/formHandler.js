const router = require('express').Router();
require('dotenv').config({path: '../vars.env'});

var mailer = require("nodemailer");

router.post('/', (req, res) => {
    console.log(req.body);
    
    let body = JSON.stringify(req.body, null, 2)
    body = body.replace(/\"/g, "");

    // Use Smtp Protocol to send Email
    var transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASSWORD
        }
    });
    
    var mail = {
        from: process.env.SENDER_EMAIL,
        to: [
            "marcelstefon@gmail.com"
        ],
        subject: req.body.subject,
        text: body
    }//i can switch to any service provider like outlook or yahoo right?
    //yes
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
        
        transporter.close();
    });
    
});

module.exports = router;
