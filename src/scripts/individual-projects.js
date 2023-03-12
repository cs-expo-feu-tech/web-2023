const data = [
    {
        lastName: "LAST NAME 1",
        firstMI: "First Name M.I.",
        imageSrc: "src/images/placeholder.png"
    },
    {
        lastName: "LAST NAME 2",
        firstMI: "First Name M.I.",
        imageSrc: "src/images/placeholder.png"
    },
    {
        lastName: "LAST NAME 3",
        firstMI: "First Name M.I.",
        imageSrc: "src/images/placeholder.png"
    },
    {
        lastName: "LAST NAME 4",
        firstMI: "First Name M.I.",
        imageSrc: "src/images/placeholder.png"
    }
];

data.forEach((element, i) => {
    const dev = document.querySelector(".card-container");

    const card = document.createElement("div");
    card.className = 'col-8 col-sm-4 col-md-4 col-xl-2 developer-card ease-anim fade-bottom';
    
    const developerCard = `
        <img class="card-img-top" src="${data[i].imageSrc}">
        <div class="card-body">
            <p class="card-text">
                ${data[i].lastName}, <br>${data[i].firstMI}
            </p>
        </div>
    `;

    card.innerHTML += developerCard;
    dev.appendChild(card);
});

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