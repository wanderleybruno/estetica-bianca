function clickMenu(){
    var itens = document.getElementById('itens-mobile');
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

// ... Seu código JavaScript anterior ...

// Função para rolar suavemente de volta ao topo
function voltarAoTopo() {
    document.body.scrollTop = 0; // Para navegadores da web
    document.documentElement.scrollTop = 0; // Para IE e Edge
}

// Adiciona um ouvinte de rolagem para mostrar ou ocultar o botão conforme necessário
window.addEventListener('scroll', function () {
    var btnVoltarTopo = document.getElementById('btnVoltarTopo');
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnVoltarTopo.style.display = 'block';
    } else {
        btnVoltarTopo.style.display = 'none';
    }
});









 

