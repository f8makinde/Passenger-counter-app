let count = 0;
let countEl = document.getElementById("counter");
let saveEl = document.getElementById("entries");
function increment(){
    count++;
    countEl.innerHTML = count;
}
function save(){
    let allElement = count + " -";
    saveEl.innerHTML += allElement;
    countEl.innerHTML = 0;
    count = 0;
}

function decrement(){
    if (count <= 0){
        countEl.innerHTML = count;
    }
    else{
        count--;
    }
 
    countEl.innerHTML = count;
}
function clr(){
countEl.innerHTML = 0;
count = 0;
}
 function del(){
    saveEl.innerHTML = "Previous entries:";
    countEl.innerHTML = 0;
    count = 0;
 }