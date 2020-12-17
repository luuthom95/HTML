$('#checkall').on('click',function(){
    // var arr = $('input[type="checkbox"]');
    // for(var i=0;i<arr.length;i++){ arr[i].checked = true;}
    $("input:checkbox").attr('checked', true);
})

$('#uncheckall').on('click',function(){
    // var arr = $('input[type="checkbox"]');
    // for(var i=0;i<arr.length;i++){ arr[i].checked = false;}
    $("input:checkbox").attr('checked', false);
})

//Bai 2
var el = document.getElementById('character');
var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
var fontDefault = parseFloat(style); 

$('#bigger').on('click',function(){
    var fontBigger = fontDefault * 1.4;
    $('#character').css('font-size', fontBigger);
})

$('#smaller').on('click',function(){
    var fontSmaller = fontDefault * 0.6;
    $('#character').css('font-size', fontSmaller);
})

$('#default').on('click',function(){
    $('#character').css('font-size', fontDefault);
})
