$(document).ready(function(){
    var myHtml = $('#htmlContainer').text();
    html = $.parseHTML(myHtml);
    var select = $('#select_1');
    var selector = $('#selector_1');
    var container = $('#htmlContainer h5');
    var originalHtml = container.text();
    var nOfInp = 1;
    var moreSelectors = $('#moreSelec');

    select.on('click', function(){
        var mySelector = selector.val();
        if(mySelector.length!==0){
            var tex = $(html).find(mySelector).html();
            container.text(tex); 
        }else{
            container.text(originalHtml);
        }
    });
    moreSelectors.on('click', function(){
        nOfInp+=1;
        var toAppend = "<br><input id='selector_'"+nOfInp+" placeholder='   selector here'><button id='select_'"+nOfInp+">selector</button>'";
        var options = $('#options');
        options.append(toAppend);
    });
});
