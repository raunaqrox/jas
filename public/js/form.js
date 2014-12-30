$(document).ready(function(){
    $('form').submit(function(e){
        var url = $('#url').val();
        if(url.length === 0){
            alert("url cannot be empty");
            e.preventDefault();
        }else{
            if(url.substr(0,7) !== "http://" || url.substr(0,8) !== "https://"){
                $('#url').val("http://"+url);
            } 
        }
    });
});
