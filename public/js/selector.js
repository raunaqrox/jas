$(document).ready(function(){
    var html = $('#htmlContainer').text();
    html = $.parseHTML(html);
    var select = $('#select');
    var selector = $('#selector');
    var container = $('#htmlContainer h5');
    var originalHtml = container.text();
    select.on('click', function(){
        var mySelector = selector.val();
        if(mySelector.length!==0){
            var tex = $(html).find(mySelector).html();
            container.text(tex); 
        }else{
            container.text(originalHtml);
        }
    });
});
