document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    // Posizioni fisse per le 3 Pokéball
    const positions = [
        { left: "10%", top: "20%" },
        { left: "80%", top: "40%" },
        { left: "50%", top: "70%" }
    ];

    // Creiamo 3 Pokéball nelle posizioni predefinite
    positions.forEach(pos => {
        let pokeball = document.createElement("div");
        pokeball.classList.add("pokeball");
        pokeball.style.left = pos.left;
        pokeball.style.top = pos.top;
        container.appendChild(pokeball);
    });
});
