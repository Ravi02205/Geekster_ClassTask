const rst=document.getElementById('reset');
const stp=document.getElementById('stop');
const strt=document.getElementById('start');

const min=document.getElementById('min');
const sec=document.getElementById('sec');
const hour=document.getElementById('hour');
let a;
let m=0;
let mils=0;
let h=0;
let j=0;
function start(){
    stp.disabled=false;
    strt.disabled=true;
    rst.disabled=false;
    mils++;
    if(mils==100){
        m++;
        min.innerText=m;
        mils=0;
    }
    if(m==60){
        h++;
        hour.innerText=h;
        m=0;
    }
    sec.innerHTML=mils;
    min.innerHTML=m;
    hour.innerHTML=h;
}

function stop(){
    clearInterval(a);
    strt.disabled=false;
    stp.disabled=true;
    rst.disabled=false;
}
function reset(){
    clearInterval(a);
    strt.disabled=false;
    stp.disabled=false;
    rst.disabled=true;
    mils=0;
    m=0;
    h=0;
    min.innerHTML="00";
    sec.innerHTML="00";
    hour.innerHTML="00";

}
strt.addEventListener('click',()=>a=setInterval(start,10));   
stp.addEventListener('click',stop);
rst.addEventListener('click',reset);
