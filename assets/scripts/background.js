// Lista de imagens para o fundo
const images = [
    '/assets/images/backgroundimg1.jpg',
    '/assets/images/backgroundimg2.jpg',
    '/assets/images/backgroundimg3.jpg'
];

// Elemento do body
const body = document.body;
let currentIndex = 0;

// Função para alternar as imagens
function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // Atualiza o índice da imagem
    body.style.setProperty(
        '--background-image',
        `url(${images[currentIndex]})`
    );
    body.style.backgroundImage = `url(${images[currentIndex]})`;
    body.style.backgroundSize = 'cover'; // Faz com que a imagem cubra toda a tela
    body.style.backgroundPosition = 'center'; // Centraliza a imagem
    body.style.backgroundRepeat = 'no-repeat'; // Impede a repetição da imagem
}

// Configuração inicial
body.style.backgroundImage = `url(${images[currentIndex]})`;
body.style.backgroundSize = 'cover'; // Faz com que a imagem cubra toda a tela
body.style.backgroundPosition = 'center'; // Centraliza a imagem
body.style.backgroundRepeat = 'no-repeat'; // Impede a repetição da imagem

// Alternar as imagens a cada 5 segundos
setInterval(changeBackground, 30000); // Mudei para 10000ms (10 segundos) como exemplo
