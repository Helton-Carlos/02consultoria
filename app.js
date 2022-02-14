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

var slider_content = document.getElementById('box');

// contain images in an array
var image = ['2', '3', '4','5','6','7', '8', '9','10','11','12', '13', '14','15','16','17', '18', '19','20','1'];

var i = image.length;


// function for next slide 

function clickDireita(){
  if (i<image.length) {
      i= i+1;
  }else{
      i = 1;
  }
    slider_content.innerHTML = "<img src='imagens/"+image[i-1]+".png'>";
}


// function for prew slide

function clickEsquerda(){

  if (i<image.length+1 && i>1) {
      i= i-1;
  }else{
      i = image.length;
  }
    slider_content.innerHTML =  "<img src='imagens/"+image[i-1]+".png'>";

}
