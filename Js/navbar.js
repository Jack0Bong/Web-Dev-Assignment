window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let navbar = document.querySelector('.nav');
    if(scroll >= 100){
        navbar.classList.add("shrink")
    }else{
        navbar.classList.remove("shrink");
    }
});