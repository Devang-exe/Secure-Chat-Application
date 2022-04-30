const express = require('express');
const bodyparser = require('body-parser');
const aes256 = require('aes256');

const cookieParser = require('cookie-parser');

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/secureChatApplication", (error)=>{
    if(!error){
        console.log("Connected to Database Successfully");
    }else{
        console.log("Error connecting to Database")
    }
})


var messageSchema = new mongoose.Schema({
    key : {
        type: String,
        required : "Required"
    },
    msg : {
        userId : {
            type: String
        },
        encmessage: {
            type: String
        },
        time: {
            type: String
        }
    }
})

const Message = new mongoose.model("Message", messageSchema);

const crypto = require('crypto');
const alice = crypto.createECDH('secp256k1');
const bob = crypto.createECDH('secp256k1');

var alicePublicKeyBase64 ="";
var bobPublicKeyBase64="";
var aliceSharedKey = "";
var key = "";
var encmsg = "";
var decmsgs = [];
var userId = "";

const app = express();

app.use(bodyparser.urlencoded({extended: false}))

app.use(bodyparser.json())
app.use(cookieParser())

app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/signIn', (req,res) => {
    res.render('signin')
})

app.post('/signIn',(req,res) => {

    userId = req.body.userid;
    res.cookie('userId', userId);
    console.log(req.cookies.userId);

    res.redirect('/main');
})

app.get('/signUp', (req,res) => {
    res.render('signUp')
})

app.post('/signUp',(req,res) => {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const userId = req.body.userid;
    const pass = req.body.pword;

    console.log( fname, lname, userId, pass);

    res.redirect('/signIn');
    
})


app.get('/main',(req,res)=>{
    decmsgs = []
    res.render('main', {key,encmsg,decmsgs,userId});
})

app.post('/generateKey', (req,res) => {
    console.log("Button Pressed")
    alice.generateKeys();
    bob.generateKeys();
    alicePublicKeyBase64 = alice.getPublicKey().toString('base64');
    bobPublicKeyBase64 = bob.getPublicKey().toString('base64');
    aliceSharedKey = alice.computeSecret(bobPublicKeyBase64,'base64','hex')
    bobSharedKey = bob.computeSecret(alicePublicKeyBase64,'base64','hex')

    key = aliceSharedKey ;

    res.redirect('/main');
})

app.post('/encryptMessage', (req,res) => {
    const msg = req.body.message;
    console.log(msg);

    encmsg = aes256.encrypt(aliceSharedKey, msg);
    console.log(encmsg, aliceSharedKey)

    // const decmsg = aes256.decrypt(bobSharedKey, encmsg);
    // console.log(decmsg, bobSharedKey)


    res.redirect('/main')
})

app.post('/send', (req,res) => {

    const { cookies } = req

    userid = cookies.userId;

    const dateObj = new Date();

    t = dateObj.toDateString() + " " + dateObj.toTimeString()
    t = t.slice(0, 24);

    const message = new Message({
        key: key,
        msg: {
            userId: userid,
            encmessage: encmsg,
            time: t
        }
      });

    message.save (function (err) {
        if(!err){
            key="";
            encmsg="";
            res.redirect('/main')
        }else{
            console.log(err);
        }
    })

    console.log("saved in database.")
})

app.post('/retrieveMessage', async (req,res) => {

    decmsgs = []

    const messages = await Message.find({});

    console.log(messages);

    messages.forEach(a => {
        const decmsg = aes256.decrypt(a.key, a.msg.encmessage);

        userid = a.msg.userId;
        time = a.msg.time;

        decmsgs.push({decmsg,userid,time});
        
    })

    console.log(decmsgs);

    console.log("retrieve messages from database.");

    res.render('main',{key,encmsg,decmsgs,userId})
})

app.listen(3000,()=>{
    console.log("server started running on port 3000")
})