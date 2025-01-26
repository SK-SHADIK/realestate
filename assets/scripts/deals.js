const loadMoreBtn = document.getElementById("loadMore");
const allCards = document.querySelectorAll(".deals-card");
let visibleCards = 6;

loadMoreBtn.addEventListener("click", () => {
    const nextVisibleCards = visibleCards + 6;
    allCards.forEach((card, index) => {
        if (index < nextVisibleCards) {
            card.style.display = "block";
        }
    });
    visibleCards = nextVisibleCards;

    if (visibleCards >= allCards.length) {
        loadMoreBtn.style.display = "none";
    }
});