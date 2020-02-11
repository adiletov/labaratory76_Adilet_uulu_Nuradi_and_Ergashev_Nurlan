const express = require('express');
const fileDb = require("../fileDb");
const router = express.Router();
const nanoid = require('nanoid');

router.get('/', (req,res)=>{
    if (req.query.datetime){
        console.log(req.query.datetime)
    }else{
        const messages = [...fileDb.getMessages()];
        let mess = messages.reverse().slice(0, 30);
        res.send(mess)
    }
});

router.post('/', (req,res)=>{
    if (req.body.message && req.body.author){
        const data = new Date().toISOString();
        const message ={
            id: nanoid(),
            author: req.body.author,
            message: req.body.message,
            dateTime: data
        };
        fileDb.postMessage(message);
        res.send(message)
    }else{
        res.status(400).send({error : "Author and message must be present in the request"})
    }
});


module.exports = router;
