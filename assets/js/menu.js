// Sélectionne toutes les cartes de plats
const cards = document.querySelectorAll('.menu-card');

// Pour chaque carte, on écoute le clic
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

document.querySelectorAll('.heart').forEach(heart => {
  heart.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('liked');
    this.classList.toggle('fa-regular');
    this.classList.toggle('fa-solid');
  });
});

