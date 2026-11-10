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

    let showReservedState = false;

    function renderVisualState() {
        reserveButton.classList.toggle("reserved", showReservedState);
        reserveButton.setAttribute("aria-pressed", String(showReservedState));
        reserveLabel.textContent = showReservedState ? "Reserveret tilstand vist" : "Vis reserveret tilstand";
        placementMessage.innerHTML = showReservedState
            ? "<strong>EKSEMPEL: FIND SPILLET PÅ HYLDE B1</strong><small>Kun visning – ingen reservation er gemt</small>"
            : "<strong>Spillets placering kommer<br>efter reservation</strong>";
    }

    reserveButton.addEventListener("click", () => {
        showReservedState = !showReservedState;
        renderVisualState();
    });

    renderVisualState();
}
