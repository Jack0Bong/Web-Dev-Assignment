let slideIndex = 1;
displaySlide(slideIndex);


function slideController(n){
    displaySlide(slideIndex+= n)
}

function dotController(n){
    slideIndex = n;
    displaySlide(slideIndex);
}

function displaySlide(n){
    let slides = document.querySelectorAll(".slides");
    if(n > slides.length){ slideIndex = 1}
    if(n < 1){ slideIndex = 3}

    for(let i = 0; i < slides.length;i++){
        slides[i].style.display="none";
    }

    slides[slideIndex-1].style.display = "block";

}