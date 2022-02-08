function abrirModal(){
    var modal = document.getElementById('abrir')
    modal.style.display = "block"
}

function fecharModal(){
    var modal = document.getElementById('abrir')
    modal.style.display = "none"
}

function clickEsquerda(){
    alert("<")
}

function clickDireita(){
    alert(">")
}


function abrirEtapaUm(){
    document.getElementById('etapa-um').style.display = 'flex'
    document.getElementById('etapa-dois').style.display = 'none'
    document.getElementById('circulo-um').style. backgroundColor = '#4e4e4e'
    document.getElementById('circulo-dois').style. backgroundColor = '#cccccc'

}


function abrirEtapaDois(){
    document.getElementById('etapa-um').style.display = 'none'
    document.getElementById('etapa-dois').style.display = 'flex'
    document.getElementById('circulo-dois').style. backgroundColor = '#4e4e4e'
    document.getElementById('circulo-um').style. backgroundColor = '#cccccc'
}