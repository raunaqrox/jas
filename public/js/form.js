$(document).ready(function(){
    $('form').submit(function(e){
        var url = $('#url').val();
        if(url.length === 0){
            alert("url cannot be empty");
            e.preventDefault();
        }
    });
});
