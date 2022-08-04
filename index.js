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