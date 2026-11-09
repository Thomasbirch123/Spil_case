const productsContainer = document.getElementById("products-container");
const filterPanel = document.getElementById("filter-panel");
const overlay = document.getElementById("overlay");
const filterToggle = document.getElementById("filter-toggle");
const closeFilter = document.getElementById("close-filter");

function displayProducts(gamesToDisplay) {
    productsContainer.innerHTML = "";
    if (!gamesToDisplay.length) {
        productsContainer.innerHTML = '<p class="no-products">Ingen spil matcher din søgning.</p>';
        return;
    }
    gamesToDisplay.forEach((game) => {
        const card = document.createElement("a");
        card.className = "game-card";
        card.href = `case_index.html?spil=${encodeURIComponent(game.id)}`;
        card.setAttribute("aria-label", `Se ${game.title}`);
        card.innerHTML = `
            <span class="cover-frame"><img src="${game.image}" alt="Forsiden til ${game.title}"></span>
            <span class="game-title">${game.title}</span>
            <span class="game-facts"><span>${game.players}</span><span>${game.category}</span><span>${game.time}</span></span>`;
        productsContainer.appendChild(card);
    });
}

function setFilterOpen(isOpen) {
    filterPanel.classList.toggle("active", isOpen);
    overlay.classList.toggle("active", isOpen);
    filterPanel.setAttribute("aria-hidden", String(!isOpen));
    filterToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("no-scroll", isOpen);
}

filterToggle.addEventListener("click", () => setFilterOpen(true));
closeFilter.addEventListener("click", () => setFilterOpen(false));
overlay.addEventListener("click", () => setFilterOpen(false));
window.addEventListener("keydown", (event) => { if (event.key === "Escape") setFilterOpen(false); });

// Rydder kun den tidligere reservationsnøgle. Oversigten læser eller viser
// ikke reservationer, og der vises derfor heller ikke et tal ved Profil.
try {
    localStorage.removeItem("reservedGames");
} catch (error) {
    // Oversigten virker stadig, hvis browseren har blokeret lokal lagring.
}

displayProducts(games);
