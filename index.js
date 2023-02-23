function descer1 (){
    element = document.getElementById("taxa1");
    element.scrollIntoView({block: "center", inline: "center"});
}

function descer2 (){
    element = document.getElementById("taxa2");
    element.scrollIntoView({block: "center", inline: "center"});
}

function descer3 (){
    element = document.getElementById("last");
    element.scrollIntoView({block: "center", inline: "center"});
}

let a = document.getElementById('card1')
let b = document.getElementById('card2')
let c = document.getElementById('card3')
let d = document.getElementById('b')

a.addEventListener("click",descer1);
b.addEventListener("click",descer2);
c.addEventListener("click",descer3);
d.addEventListener("click",voltar);
