const express = require('express');
const nodemailer = require('nodemailer')
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth:{
        user: 'tjoy4799@gmail.com',
        pass: 'rnnm xpnf wlys xrbe'
    }
})


function aFunc(reciver){
    transporter.sendMail(reciver,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            console.log(reciver.to)
        }
    })
}

app.get('/send-mail',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
    
})

app.post('/sand-mail',(req,res)=>{

    const reciver  = {
        from: 'tjoy4799@gmail.com',
        to:     req.body.mail,
        subject: 'mail testing',
        html: req.body.code
    }
    
    res.send(aFunc(reciver))
   
})

module.exports = app