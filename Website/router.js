
var express = require("express");
var router = express.Router();
const {check, validationResult} = require('express-validator');

const convert = require('./index');

router.post('/convert',[
    check('number', 'Must be a valid number')
        .isLength({min:1})
        .isLength({max:5})
],(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const alert = errors.array();
        res.render('main',{
            alert
        })       
    }else{
        let number = convert.convertNumberToEnglishText(req.body.number);
        res.redirect('/route/result?valid=' + number); 
    }
});

router.get('/result',(req,res)=> {
    var passedVariable = req.query.valid;
    if(passedVariable.length > 0){
        res.render('result', {passedVariable})
    }else{
        res.send("Something went wrong")
    }
})

module.exports = router;