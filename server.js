require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const nodeMailer = require("nodemailer");
const errorHandler = require("errorhandler");
const cors = require("cors");
app.use(cors({ origin: "*", credentials: true }));
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(morgan("dev"));
let transporter = nodeMailer.createTransport({
    service:"gmail",
    auth: {
		user: process.env.EMAIL,
		pass: process.env.EMAIL_PASSWORD,
	},
});
app.post("/send-catalog",(req,res)=>{
    const email = req.body.email;
    const mailOptions = {
        to: email,
        from: process.env.EMAIL,
        subject: "HCM Product Catalog",
        html: `<div style='background: linear-gradient(90deg,hsla(140, 73%, 36%, 1) 0%,hsla(152, 85%, 50%, 1) 100%);width:60%;padding:30px;margin:0 auto;'><h1 style="display:block;color:white; margin:20px;font-family:sans-serif">Greetings,<h1><h3 style="display:block;margin:20px;font-family:sans-serif;color:white">Thank you for showing interest in HCM Agro Products. Here is a copy of the catalog<h3></div>`,
        attachments: [
            {
                path:"./HCM.pdf"
            }
        ]
    };
    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            console.log("Error occurred ", err);
        } else {
            console.log(`Sent email to ${req.body.email}`);
            res.status(201).send({ email: req.body.email });
        }
    });
    
});
app.post("/send-query",(req,res)=>{
    const email  = req.body.email;
    const name = req.body.name;
    const query = req.body.query;
    const mailOptions = {
        to: process.env.EMAIL,
        from: process.env.EMAIL,
        subject: `Query from ${name}`,
        html: `<div><p>${query}</p><br><p>Name:${name}</p><p>Email: ${email}</p></div>`
    }
    transporter.sendMail(mailOptions,(err)=>{
        if(err){
            console.log("Error occurred", err);
        }
        else{
            console.log(`Received a query from ${req.body.name} `);
        }
    });
    res.sendStatus(201);
})
app.post("/send-reply",(req,res)=>{
    const email = req.body.email;
    
    const mailOptions = {
        to: email,
        from: process.env.EMAIL,
        subject: "Thank you for showing interest",
        html: `<div style='background: linear-gradient(90deg,hsla(140, 73%, 36%, 1) 0%,hsla(152, 85%, 50%, 1) 100%);width:60%;padding:30px;margin:0 auto;'><h1 style="display:block;color:white; margin:20px;font-family:sans-serif">Greetings,<h1><h3 style="display:block;margin:20px;font-family:sans-serif;color:white">We have received your query/comment, we will get in touch with you soon. <h3></div>`,
    };
    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            console.log("Error occurred ", err);
        } else {
            console.log(`Sent email to ${req.body.email}`);
            res.status(201).send({ email: req.body.email });
        }
    });
    
})
if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('agro/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'agro', 'build', 'index.html'));
    });
  }
app.use(errorHandler());

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})

module.exports = app;