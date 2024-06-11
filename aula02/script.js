const botao = document.querySelector("button");

const cores = document.querySelector('select'); //Utiliza o select no html//

function mudarCor () {
botao.style.backgroundColor = cores.value; //ponto é uma concatenação(junção) do cores com value//
//troca de cor segundo o valor atribuído no option do html//


}