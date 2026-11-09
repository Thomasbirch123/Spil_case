const searchInput = document.getElementById("search-input");
const categoryFilters = document.getElementById("category-filters");
const resetFilters = document.getElementById("reset-filters");
const applyFilters = document.getElementById("apply-filters");
const searchButton = document.getElementById("search-button");
const sortSelect = document.getElementById("sort-select");
const timeRange = document.getElementById("time-range");
const timeOutput = document.getElementById("time-output");

const categories = [...new Set(games.map((game) => game.category))].sort((a, b) => a.localeCompare(b, "da"));
categories.forEach((category) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" name="category" value="${category}"> <span>${category}</span>`;
    categoryFilters.appendChild(label);
});

function filterGames() {
    const query = searchInput.value.toLowerCase().trim();
    const selected = [...document.querySelectorAll('input[name="category"]:checked')].map((input) => input.value);
    const playerCounts = [...document.querySelectorAll('input[name="players"]:checked')].map((input) => Number(input.value));
    const difficulty = document.querySelector('input[name="difficulty"]:checked')?.value || "";
    const maxTime = Number(timeRange.value);
    let filtered = games.filter((game) => {
        const haystack = `${game.title} ${game.category} ${game.info}`.toLowerCase();
        const matchesText = !query || haystack.includes(query);
        const matchesCategory = !selected.length || selected.includes(game.category);
        const matchesPlayers = !playerCounts.length || playerCounts.some((count) => game.maxPlayers >= count);
        const matchesTime = game.timeMinutes <= maxTime;
        const matchesDifficulty = !difficulty || game.difficulty === difficulty;
        return matchesText && matchesCategory && matchesPlayers && matchesTime && matchesDifficulty;
    });
    if (sortSelect.value === "title-asc") filtered.sort((a, b) => a.title.localeCompare(b.title, "da"));
    if (sortSelect.value === "time-asc") filtered.sort((a, b) => a.timeMinutes - b.timeMinutes);
    if (sortSelect.value === "time-desc") filtered.sort((a, b) => b.timeMinutes - a.timeMinutes);
    displayProducts(filtered);
}

searchButton.addEventListener("click", filterGames);
searchInput.addEventListener("keydown", (event) => { if (event.key === "Enter") filterGames(); });
sortSelect.addEventListener("change", filterGames);
categoryFilters.addEventListener("change", filterGames);
timeRange.addEventListener("input", () => { timeOutput.value = timeRange.value; });
applyFilters.addEventListener("click", () => { filterGames(); setFilterOpen(false); });
resetFilters.addEventListener("click", () => {
    searchInput.value = "";
    categoryFilters.querySelectorAll("input").forEach((input) => { input.checked = false; });
    document.querySelectorAll('input[name="players"]').forEach((input) => { input.checked = false; });
    document.querySelectorAll('input[name="difficulty"]').forEach((input) => { input.checked = false; });
    timeRange.value = "120";
    timeOutput.value = "120";
    sortSelect.value = "standard";
    filterGames();
});
