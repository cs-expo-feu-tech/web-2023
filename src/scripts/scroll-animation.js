function ease(){
    var ease = document.querySelectorAll(".ease-anim")
    for (var i = 0; i < ease.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = ease[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if(elementTop < windowHeight - elementVisible){
            ease[i].classList.add("active");
        } 
    }
}

window.addEventListener("scroll", ease);

// Added this to load animations without triggering "scrolling" - 
// elements that are supposed to be shown are not animated unless you "scroll"
// this also solves the problem of elements that are above the viewport so as
// to make them not jarring when you scroll back up to them
document.addEventListener("DOMContentLoaded", ease);