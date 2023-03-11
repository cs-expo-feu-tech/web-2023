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
    card.className = 'col-8 col-sm-4 col-md-4 col-xl-2 developer-card';
    
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