setInterval(function(){
    var currentActive = $(".mySlides.slide-active");
    var nextActive;
    currentActive.removeClass("slide-active");

    if(currentActive.next(".mySlides").length > 0) {
        nextActive = currentActive.next(".mySlides");
    } else {
        nextActive = $(currentActive.siblings(".mySlides")[0]);
    }
    nextActive.addClass("slide-active");
}, 5000);
//var timer = window.seInterval(slide, 5000);