const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        const proximoElemento = document.getElementById(proximoPasso);

        if (proximoElemento) {
            atual.classList.remove('ativo');
            proximoElemento.classList.add('ativo');
        } else {
            console.error(`Elemento com ID ${proximoPasso} não encontrado.`);
        }
    });
});