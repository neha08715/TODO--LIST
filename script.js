console.log("script.js is loaded and running");

let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

inputBx.addEventListener("keyup", function(event) {  // Corrected the method name here
    if (event.key === "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (inputBx) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${inputBx} <i></i>`;

    listItem.addEventListener("click",function(){
        this.classList.toggle('done');
    })
    listItem.querySelector("i").addEventListener("click",function(){
            listItem.remove();
        })
    
    list.appendChild(listItem);
}

