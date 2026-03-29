// Animation des cards
const cards = document.querySelectorAll('.menu-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

// Gestion des likes (cards + header)
document.querySelectorAll('.heart').forEach(heart => {
  heart.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    this.classList.toggle('liked');
    this.classList.toggle('fa-regular');
    this.classList.toggle('fa-solid');
  });
});
