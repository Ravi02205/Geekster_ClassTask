var show=document.getElementById('main');
var button=document.getElementById('btn');
var hcolor=document.getElementById('haxcolor');

var color=['red','black','green','crimson','#800020','peru'];

show.style.backgroundColor="red";

const changeColor=()=>{
    var i=Math.floor(Math.random()*color.length);
    hcolor.innerText=`background color: ${color[i]}`;
    show.style.backgroundColor=color[i];
}

button.addEventListener('click',changeColor);