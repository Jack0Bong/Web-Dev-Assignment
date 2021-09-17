// Author: Brian Lai Kah Hoe
tabHandler(0);

function tabHandler(tabindex){
    let tab = document.querySelectorAll(".card-view");
    for(let i =0;i < tab.length;i++){
        tab[i].style.display="none";

    }
    tab[tabindex].style.display="grid";
}

$('button.tablink').on('click', function() {
    var activeLink = $('.active');
    activeLink.removeClass('active'); 
    $(this).parent().addClass('active');
});

