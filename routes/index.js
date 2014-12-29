var request = require('request');
exports.home = function(req,res){
    res.render('home');
};

exports.fun = function(req,res){
    var url = req.body.url;
    var cl = req.body.class;
    var id = req.body.id;
    var element = req.body.element;
    if(cl.length === 0 && id.length===0 && element.length === 0){
        request.get(url, function(error, response, body){
             if (!error && response.statusCode == 200) {
                 var toSend = {};
                 toSend.url = url;
                 toSend.body = body;
                 res.render('fun',{'toSend':toSend});        
             }else{
                 res.render('fun',{'error':error});
             }
        });
    }
};
