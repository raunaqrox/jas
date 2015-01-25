var request = require('request');

exports.home = function(req,res){
    res.render('home');
};

exports.gFun = function(req,res){
    res.render('home');
};

exports.pFun = function(req,res){
    var url = req.body.url;
        request.get(url,{rejectUnauthorized : false}, function(error, response, body){
             if (!error && response.statusCode == 200) {
                 var toSend = {};
                 toSend.url = url;
                 toSend.body = body;
                 res.render('fun',{'toSend':toSend});        
             }else{
                 res.render('fun',{'error':error});
             }
        });
};
