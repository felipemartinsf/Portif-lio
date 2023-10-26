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