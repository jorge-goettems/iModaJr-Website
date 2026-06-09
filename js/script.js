document.getElementById('year').textContent = new Date().getFullYear();

function initCarrossel(id, captions, interval) {
    var el = document.getElementById(id);

    if (!el) {
        return;
    }

    var ul = el.querySelector('ul');
    var cap = el.querySelector('figcaption');
    var prev = el.querySelector('.prev');
    var next = el.querySelector('.next');

    var i = 0;

    function go(n) {
        i = (n + captions.length) % captions.length;

        ul.style.transform = 'translateX(-' + (i * 100) + '%)';

        if (cap) {
            cap.textContent = captions[i];
        }
    }

    prev.addEventListener('click', function () {
        go(i - 1);
    });

    next.addEventListener('click', function () {
        go(i + 1);
    });

    setInterval(function () {
        go(i + 1);
    }, interval);
}

initCarrossel(
    'home-carrossel',
    [
        'Editorial 01',
        'Bastidores',
        'Coleção Cápsula',
        'Lookbook 2025'
    ],
    4500
);

initCarrossel(
    'featured-carrossel',
    [
        'Campanha Inverno',
        'Identidade Visual',
        'Editorial Praiano',
        'Lookbook Primavera'
    ],
    4000
);