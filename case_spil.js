const params = new URLSearchParams(window.location.search);
const requestedId = params.get("spil");
const game = games.find((item) => item.id === requestedId);

if (!game) {
    window.location.replace("index.html");
} else {
    document.title = `${game.title} · Spilcaféen`;
    document.getElementById("game-cover").src = game.image;
    document.getElementById("game-cover").alt = `Forsiden til ${game.title}`;
    document.getElementById("game-title").textContent = game.title;
    document.getElementById("game-info").textContent = game.info;
    document.getElementById("game-rules").textContent = game.rules;

    const reserveButton = document.getElementById("reserve-button");
    const reserveLabel = document.getElementById("reserve-label");
    const placementMessage = document.getElementById("placement-message");
    const statusMessage = document.getElementById("reservation-status");
    const badge = document.querySelector(".reservation-badge");

    function getReservedGames() {
        return JSON.parse(localStorage.getItem("reservedGames") || "[]");
    }

    function renderReservation() {
        const reservedGames = getReservedGames();
        const isReserved = reservedGames.includes(game.id);
        reserveButton.classList.toggle("reserved", isReserved);
        reserveButton.setAttribute("aria-pressed", String(isReserved));
        reserveLabel.textContent = isReserved ? "Reservering gennemført" : "Reserver spillet";
        placementMessage.innerHTML = isReserved
            ? "<strong>FIND SPILLET PÅ HYLDE B1</strong><small>Aflever under Profil</small>"
            : "<strong>Spillets placering kommer<br>efter reservation</strong>";
        badge.textContent = reservedGames.length;
        badge.hidden = reservedGames.length === 0;
    }

    reserveButton.addEventListener("click", () => {
        const reservedGames = getReservedGames();
        if (!reservedGames.includes(game.id)) {
            reservedGames.push(game.id);
            localStorage.setItem("reservedGames", JSON.stringify(reservedGames));
            statusMessage.textContent = `${game.title} er nu reserveret.`;
        } else {
            statusMessage.textContent = `${game.title} er allerede reserveret.`;
        }
        renderReservation();
    });

    renderReservation();
}
