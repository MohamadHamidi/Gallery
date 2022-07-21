var pics=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
var i=0;

function back(){
    i--;
    if(i<0){
        i=pics.length-1;
    }
    document.getElementById("picture").src=pics[i];
}

function next(){
    i++;
    if(i>pics.length-1){
        i=0;
    }
    document.getElementById("picture").src=pics[i];
}
var b;
function SlideShow(){
    b=setInterval(next,600);
}
function stop(){
    clearTimeout(b);
}
function random(){
    i=Math.floor(Math.random()*(pics.length-1));
    document.getElementById("picture").src=pics[i];
}
var m;
function randomshow(){
    m=setInterval(random,600);
}
function stoprandom(){
    clearTimeout(m);
}