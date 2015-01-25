$(document).ready(function(){
   
    var myHtml = $('#htmlContainer').text();
    var html = $.parseHTML(myHtml);
    var selector; 
    var container; 
    var originalHtml; 
    var inputs; 
    var nOfInp;
    var moreSelectors;
    var options;


    function selectorResult(){
        var mySelector = $(this).val();
        // inputbox not empty
        if(mySelector.length!==0){
            if($(mySelector).length == 0){
                container.text("element not found");
            }else{
                var s = '';
                var jSelector = $(mySelector);
                console.log(jSelector);
                jSelector.each(function(i){
                    var toAdd = String($(this).html());
                    if(toAdd.length === 0){
                        s += $(this)[0].outerHTML;
                    }else{
                        s += toAdd;
                    }
                });
                
                container.text(s);
/*                var s = '';
                for(var i=0;i<tex.length;i++){
                    s += $(tex[i]).html();
                }
                container.text(s);
  */
                }
       
        }else{
            container.text(originalHtml);
        }
    }

    // when X is clicked
    function removeThis(){
        var temp = $(this).attr('id').split('_')[1];
        $('#'+temp).remove();
        nOfInp -= 1;
    }
    

    function addInput(){
        nOfInp += 1;
        var toAppend = "<br><div id='"+nOfInp+"'><input class='fOpInp' id='selector_'"+nOfInp+" placeholder='   selector "+nOfInp+" here'><button id='X_"+nOfInp+"'>X</button></div>";
        options.append(toAppend);
        inputs = $('input');
        var x = $('#X_'+nOfInp);
        $(x).on('click', removeThis);
        $(inputs[nOfInp-1]).on('change input', selectorResult);
    }

    function init(){
        //selector div
        options = $('#options');
        // button to add more selectors
        moreSelectors = $('#moreSelec');
        // initial number of inputs
        nOfInp = 1;
        inputs = $('input');
        //selector
        selector = $('#selector_1');

        // the div that contains the html
        container = $('#htmlContainer h5');

        // contains the html of the page
        originalHtml = container.text();

        // event listeners
        // while typing select
        inputs.on('input change', selectorResult);
        // add extra selectors
        moreSelectors.on('click', addInput);
    }

    init();
});
