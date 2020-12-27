function handleTab(index) {
    var el = $('.section');
    var elTab= $('.category');
    elTab.css('color','fff');
    elTab.css('background-color', 'grey');

    el.css('display', 'none');
    el[index].style.display = 'block';
    elTab[index].style.backgroundColor = '#088fbe';
    elTab[0].classList.remove("active");
}