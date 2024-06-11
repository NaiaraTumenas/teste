//getAttribute - Obter o valor do atributo (valor da linha)

//setAtribute - definir ou modificar o valor

function changeImage() {
    const img = document.getElementById('myImage'); //Aqui conseguimos armazenar o conteúdo da imagem

    const currentSrc = img.getAttribute("src"); // Aqui pegamos o atributo src da imagem para trabalhar a troca da mesma

    if (currentSrc === 'git.png') {

        // Se a origem atual da imagem for igual a 'git.png' execute algo.
        img.setAttribute("src", "teams.jpg") //usando o SetAtribute vamos modificar o valor dela, através do src e especificando a outra img.

        img.setAttribute("alt"), "Imagem Teams";

    } else { // Caso contrário faça o processo inverso
        img.setAttribute("src", "git.png");
        img.setAttribute("alt", "Imagem Git");


    };






};

function changeType() {
    const input = document.getElementsByName("input")[0];

    //indice 0, indica o primeiro elemento da lista de input, que são vários.

    const currentType = input.getAttribute("type");

    switch (currentType) {
        case 'text':
            input.setAttribute('type', 'number');
            break;

        case "radio":
            input.setAttribute("type", "range");
            break;

        default:
            input.setAttribute("type", "text")


    };



}

