//imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("./images/estrada.png");
  imagemDoAtor = loadImage("./images/ator-1.png");
  imagemCarro = loadImage("./images/carro-1.png");
  imagemCarro2 = loadImage("./images/carro-2.png");
  imagemCarro3 = loadImage("./images/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("./sound/trilha.mp3");
  somDaColisao = loadSound("./sound/colidiu.mp3");
  somDoPonto = loadSound("./sound/pontos.wav");
  }