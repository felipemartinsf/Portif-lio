function descer1 (){
    element = document.getElementById("first");
    element.scrollIntoView({block: "center", inline: "center", behavior: 'smooth'
});
}

function descer2 (){
    element = document.getElementById("taxa2");
    element.scrollIntoView({block: "center", inline: "center", behavior: 'smooth'
});
}

function descer3 (){
    element = document.getElementById("last");
    element.scrollIntoView({block: "center", inline: "center", behavior: 'smooth'
});
}
function link (){
    var win = window.open('https://www.unifesp.br/', '_blank');
    win.focus();
}
function firstOption(){
  mostrarDiv()
  esconderDiv2()
}
function mostrarDiv() {
    var minhaDiv = document.getElementById("minhaDiv");
    minhaDiv.style.display = "inline-block";
    setTimeout(function() {
      minhaDiv.style.opacity = "1";
    }, 10); // Adicione um pequeno atraso para garantir que a transição ocorra após a exibição
  }
  
  function esconderDiv() {
    var minhaDiv = document.getElementById("minhaDiv");
    minhaDiv.style.opacity = "0";
    setTimeout(function() {
      minhaDiv.style.display = "none";
    }, 500); // Atraso de 500ms, correspondente à duração da transição
  }

  function mostrarDiv2() {
    var minhaDiv = document.getElementById("minhaDiv2");
    minhaDiv.style.display = "inline-block";
    minhaDiv.style.positon = "absolute";
    setTimeout(function() {
      minhaDiv.style.opacity = "1";
    }, 10); // Adicione um pequeno atraso para garantir que a transição ocorra após a exibição
  }
  
  function esconderDiv2() {
    var minhaDiv = document.getElementById("minhaDiv2");
    minhaDiv.style.opacity = "0";
    setTimeout(function() {
      minhaDiv.style.display = "none";
    }, 500); // Atraso de 500ms, correspondente à duração da transição
  }
  

/*
var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
})
*/

let a = document.getElementById('card1')
let b = document.getElementById('card2')
let c = document.getElementById('card3')
let d = document.getElementById('b')
let e = document.getElementById('logo')

a.addEventListener("click",descer1);
b.addEventListener("click",descer2);
c.addEventListener("click",descer3);
e.addEventListener("click",link)