const carousel = document.querySelector('.carousel'); // const, let ou var são variáveis para puxar objetos do outro arquivo
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showImage(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`; // aqui ele tá colocando o a animação de passar slide no eixo x
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? carousel.children.length - 1 : currentIndex - 1; // ação ao clicar no prevBtn pra "voltar uma imagem"
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === carousel.children.length - 1) ? 0 : currentIndex + 1; // ação ao clicar no nxtBtn pra "avançar uma imagem"
  showImage(currentIndex);
});

/*------------ Submenus ----------*/

function togglePesquisas() {
  var pesquisas = document.getElementById('pesquisas');
  var arrowBtn1 = document.getElementById('arrow-btn1'); // Seleciona o botão da seta para baixo

  if (pesquisas.classList.contains("hidden")) {
    pesquisas.classList.remove("hidden");
    arrowBtn1.textContent = "⇱"; // Altera para seta para cima
  } else {
    pesquisas.classList.add("hidden");
    arrowBtn1.textContent = "⇲"; // Altera para seta para baixo
  }
}

function toggleTransparencia() {
  var transparencia = document.getElementById('transparencia');
  var arrowBtn2 = document.getElementById('arrow-btn2'); // Seleciona o botão da seta para baixo

  if (transparencia.classList.contains("hidden")) {
    transparencia.classList.remove("hidden");
    arrowBtn2.textContent = "⇱"; // Altera para seta para cima
  } else {
    transparencia.classList.add("hidden");
    arrowBtn2.textContent = "⇲"; // Altera para seta para baixo
  }
}

function toggleInstitucional() {
  var instituional = document.getElementById('institucional');
  var arrowBtn3 = document.getElementById('arrow-btn3'); // Seleciona o botão da seta para baixo

  if (instituional.classList.contains("hidden")) {
    instituional.classList.remove("hidden");
    arrowBtn3.textContent = "⇱"; // Altera para seta para cima
  } else {
    instituional.classList.add("hidden");
    arrowBtn3.textContent = "⇲"; // Altera para seta para baixo
  }
}


