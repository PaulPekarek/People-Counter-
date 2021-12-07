let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

//increases count 
function increment() {
    count += 1;
    countEl.innerText = count;
}

//decreases count 
function decrease() {
    count = count - 1;
    countEl.textContent = count;
}

//saves count 
function save () {
    let countStr = " " + count + " ";
    saveEl.textContent += countStr;
    countEl.textContent = 0; 
    count = 0;
}

