let meuElemento = document.getElementById ("meuElemento");

function tornarCirculo() {
meuElemento.classList.add ("circle");
meuElemento.classList.remove ("square");
}

function tornarQuadrado() {
meuElemento.classList.add ("square");
meuElemento.classList.remove ("circle"); 
}

function alternarFormato(){
meuElemento.classList.toggle("circle"); // toggle = olha o estado real que está a caixa e faz o processo inverso//
meuElemento.classList.toggle("square"); //se estiver quadrado, ele torna círculo. Caso esteja com o círculo, ele torna quadrado//


}