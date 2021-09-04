function tabHandler(tabindex){
    let tab = document.querySelectorAll(".card-view");
    for(let i =0;i < tab.length;i++){
        tab[i].style.display="none";
    }
    tab[tabindex].style.display="grid";
}

tabHandler(tabindex);
