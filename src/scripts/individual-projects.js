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