const cards = document.querySelectorAll('.card');


cards.forEach((card) => {
  card.addEventListener('click', () => {
    if(card.classList.contains('active')) {
      card.classList.remove('active');
    } else {
    removerClasseActive();
    card.classList.add('active');
    }
  
  });
});

function removerClasseActive() {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
}


