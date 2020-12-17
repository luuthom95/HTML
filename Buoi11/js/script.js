
// alert("xxxx");
// document.getElementById('text').addEventListener('click', handleChange);
// function handleChange() {
//     alert("x");
// }
// var el=document.getElementById('body');
// var tag=document.createElement('h3');
// var nodetext = document.createTextNode('Hello belele');

// tag.appendChild(nodetext);
// el.appendChild(tag)
// var el=$('input#userName[type="text"]')
// console.log(el)
$('#hide').on('click',function(){
    $('#text').slideUp(2000);
})

$('#show').on('click',function(){
    $('#text').animate({
        left:"250px",
        opacity: 0.5
    });
    //$('#text').fadeIn(2000);
    // $('#text').toggle(2000);
    //$('#text').fadeTo('slow','0.15')
})