const imagens = ["./img/revolucao-francesa.webp", "./img/revolucao-industrial.jpg"];
let index = 0;

function trocarImagem() {
    index = (index + 1) % imagens.length;
    document.getElementById("imagem-troca").src = imagens[index];
}

setInterval(trocarImagem, 5000);


function expand1() {
    document.querySelector(".expandir1").classList.toggle("expanded");
}

function expand2() {
    document.querySelector(".expandir2").classList.toggle("expanded");
}

function expand3() {
    document.querySelector(".expandir3").classList.toggle("expanded");
}

function expand4() {
    document.querySelector(".expandir4").classList.toggle("expanded");
}


function expandImage(descId) {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => {
        if (desc.id === descId) {
            desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
        } else {
            desc.style.display = 'none';
        }
    });
}