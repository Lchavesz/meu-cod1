function abrirPagina(url) {
    window.location.href = url;
}

function abrirNovaPagina() {
    var resposta = confirm("Deseja abrir outra página?");
    if (resposta) {
        abrirPagina("momo.html");
    }
}

function Hover(btn) {
    btn.style.position = 'absolute';
    btn.style.top = Posicao(10, 90);
    btn.style.left = Posicao(10, 90);
}

function Posicao(min, max) {
    return (Math.random() * (max - min) + min) + '%';
}

