const API_URL = "https://api4.binance.com/api/v3/ticker/24hr";

const cryptoList = document.getElementById("cryptoList");
const loading = document.getElementById("loading");
const searchInput = document.getElementById("searchInput");
const allTab = document.getElementById("allTab");
const favoritesTab = document.getElementById("favoritesTab");
const itemsPerLoad = 20;

let allCryptoData = [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let currentTab = "all";
let isLoading = false;
let visibleCount = 20;
let filteredCryptoData = [];


async function fetchCryptoData() {
    if (isLoading) {
        return;
    }

    isLoading = true;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("API 요청 실패: " + response.status);
        }

        const data = await response.json();

        allCryptoData = data.filter(coin =>
            coin.symbol.endsWith("USDT") &&
            Number(coin.lastPrice) !== 0
        );

        filterAndRender();
        loading.classList.add("d-none");

    } catch (error) {
        console.error("데이터 요청 오류:", error);

        if(allCryptoData.length === 0) {
        loading.textContent = "데이터를 불러오지 못했습니다.";
        loading.classList.remove("d-none");
        }    

    } finally {
        isLoading = false;
    }
}

function filterAndRender() {
    const searchTerm = searchInput.value.toUpperCase();

    filteredCryptoData = allCryptoData.filter(coin =>
        coin.symbol.includes(searchTerm)
    );

    if (currentTab === "favorites") {
        filteredCryptoData = filteredCryptoData.filter(coin =>
            favorites.includes(coin.symbol)
        );
    }

    const visibleData = filteredCryptoData.slice(0, visibleCount);

    renderData(visibleData);
}

function renderData(coins) {
    cryptoList.innerHTML = "";

    coins.forEach(coin => {
        const row = document.createElement("tr");

        const isFavorite = favorites.includes(coin.symbol);
        const priceChange = Number(coin.priceChangePercent);
        const changeClass = priceChange >= 0 ? "text-danger" : "text-primary";
        const sign = priceChange > 0 ? "+" : "";

        row.innerHTML = `
            <td>
                <button class="btn btn-sm ${isFavorite ? "text-warning" : "text-secondary"}"
                    onclick="toggleFavorite('${coin.symbol}')"> 
                    ${isFavorite ? "★":"☆"}
                </button>
            </td>
            <td class="fw-bold">${coin.symbol}</td>
            <td>${Number(coin.lastPrice).toLocaleString()}</td>
            <td class="${changeClass}">
                ${sign}${priceChange.toFixed(2)}%
            </td>
            <td>${Number(coin.highPrice).toLocaleString()}</td>
            <td>${Number(coin.lowPrice).toLocaleString()}</td>
        `;

        cryptoList.appendChild(row);
    });
}

function toggleFavorite(symbol) {
    if (favorites.includes(symbol)) {
        favorites = favorites.filter(coin => coin !== symbol);
    } else {
        favorites.push(symbol);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    filterAndRender();
}

searchInput.addEventListener("input", () => {
    visibleCount = 20;
    filterAndRender();
});

allTab.addEventListener("click", () => {
    currentTab = "all";
    visibleCount = 20;

    allTab.className = "btn btn-dark";
    favoritesTab.className = "btn btn-outline-dark";

    filterAndRender();
});

favoritesTab.addEventListener("click", () => {
    currentTab = "favorites";
    visibleCount = 20;

    favoritesTab.className = "btn btn-dark";
    allTab.className = "btn btn-outline-dark";

    filterAndRender();
});

const scrollTrigger = document.getElementById("scrollTrigger");

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting &&
        visibleCount < filteredCryptoData.length) {

        visibleCount += itemsPerLoad;
        filterAndRender();
        }
});

observer.observe(scrollTrigger);

fetchCryptoData();

setInterval(fetchCryptoData, 1000);
