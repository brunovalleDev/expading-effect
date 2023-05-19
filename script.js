const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    removerClasseActive();
    card.classList.add('active');
  });
});

function removerClasseActive() {
  cards.forEach(card => {
    card.classList.remove('active');
  });
}