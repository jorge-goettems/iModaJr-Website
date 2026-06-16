document.getElementById('year').textContent = new Date().getFullYear(); // Define o ano atual no elemento com id "year".

function initCarrossel(id, captions, interval) { // Cria a inicialização de um carrossel reutilizável.
    var el = document.getElementById(id); // Busca o elemento principal do carrossel pelo id informado.

    if (!el) { // Interrompe a execução se o carrossel não existir na página.
        return; // Evita erros ao tentar acessar elementos inexistentes.
    }

    var ul = el.querySelector('ul'); // Seleciona a lista com os itens do carrossel.
    var cap = el.querySelector('figcaption'); // Seleciona a legenda exibida abaixo das imagens.
    var prev = el.querySelector('.prev'); // Seleciona o botão de voltar.
    var next = el.querySelector('.next'); // Seleciona o botão de avançar.

    var i = 0; // Guarda o índice atual do item exibido.

    var timer;

    function startTimer() {
    clearInterval(timer); // cancela o intervalo anterior

    timer = setInterval(function () {
        go(i + 1);
    }, interval);
}

    function go(n) { // Atualiza o carrossel para um índice específico.
        i = (n + captions.length) % captions.length; // Mantém o índice dentro dos limites do array.

        ul.style.transform = 'translateX(-' + (i * 100) + '%)'; // Move a lista horizontalmente para mostrar o item atual.

        if (cap) { // Atualiza a legenda somente se o elemento existir.
            cap.textContent = captions[i]; // Troca o texto da legenda pelo correspondente ao item atual.
        } // Fecha a condição da legenda.
    } // Fecha a função que altera o slide.

    prev.addEventListener('click', function () { // Adiciona ação ao botão anterior.
        go(i - 1);
        startTimer(); // Volta um item no carrossel.
    }); // Fecha o evento de clique do botão anterior.

    next.addEventListener('click', function () { // Adiciona ação ao botão próximo.
        go(i + 1);
        startTimer(); // Avança um item no carrossel.
    }); // Fecha o evento de clique do botão próximo.

    go(0);
    startTimer();
    //setInterval(function () { // Define a troca automática dos slides.
        //go(i + 1); // Avança automaticamente para o próximo item.
    //}, interval); Usa o intervalo informado em milissegundos.
} // Fecha a função de inicialização do carrossel.

initCarrossel( // Inicializa o carrossel da página inicial.
    'home-carrossel', // Informa o id do carrossel da home.
    [ // Lista de legendas do carrossel da home.
        'Editorial 01', // Legenda do primeiro slide.
        'Bastidores', // Legenda do segundo slide.
        'Coleção Cápsula', // Legenda do terceiro slide.
        'Lookbook 2025' // Legenda do quarto slide.
    ], // Fecha o array de legendas.
    4500 // Define a troca automática a cada 4,5 segundos.
); // Fecha a chamada do carrossel da home.

initCarrossel( // Inicializa o carrossel de destaques.
    'featured-carrossel', // Informa o id do carrossel de destaques.
    [ // Lista de legendas do carrossel de destaques.
        'Campanha Inverno', // Legenda do primeiro slide.
        'Identidade Visual', // Legenda do segundo slide.
        'Editorial Praiano', // Legenda do terceiro slide.
        'Lookbook Primavera' // Legenda do quarto slide.
    ], // Fecha o array de legendas.
    4000 // Define a troca automática a cada 4 segundos.
); // Fecha a chamada do carrossel de destaques.