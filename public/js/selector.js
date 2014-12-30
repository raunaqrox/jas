$(document).ready(function(){
    var myHtml = $('#htmlContainer').text();
    html = $.parseHTML(myHtml);
    var selector; 
    var container; 
    var originalHtml; 
    var inputs; 
    var nOfInp;
    var moreSelectors;
    var options;
    function selectorResult(){
        var mySelector = $(this).val();
        if(mySelector.length!==0){
            var tex = $(html).find(mySelector).html();
            container.text(tex); 
        }else{
            container.text(originalHtml);
        }
    }

    function removeThis(){
        var temp = $(this).attr('id').split('_')[1];
        $('#'+temp).remove();
    }

    function addInput(){
        nOfInp+=1;
        var toAppend = "<br><div id='"+nOfInp+"'><input class='fOpInp' id='selector_'"+nOfInp+" placeholder='   selector "+nOfInp+" here'><button id='X_"+nOfInp+"'>X</button></div>";
        options.append(toAppend);
        inputs = $('input');
        var x = $('#X_'+nOfInp);
        $(x).on('click', removeThis);
        $(inputs[nOfInp-1]).on('change input', selectorResult);
    }
    function init(){
        options = $('#options');
        moreSelectors = $('#moreSelec');
        nOfInp = 1;
        inputs = $('input');
        selector = $('#selector_1');
        container = $('#htmlContainer h5');
        originalHtml = container.text();
        inputs.on('input change', selectorResult);
        moreSelectors.on('click', addInput);
    }
    init();
});
