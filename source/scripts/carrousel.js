const carrousel = document.getElementById('carrousel');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function updateCarrousel() {
  const cardWidth = carrousel.querySelector('div').offsetWidth + 24;
  carrousel.style.transform = `translateX(${-index * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  const totalCards = carrousel.children.length;
  index = (index + 1) % totalCards; // vai do último pro primeiro
  updateCarrousel();
});

backBtn.addEventListener('click', () => {
  const totalCards = carrousel.children.length;
  index = (index - 1 + totalCards) % totalCards; // volta do primeiro pro último
  updateCarrousel();
});

window.addEventListener('resize', updateCarrousel);
