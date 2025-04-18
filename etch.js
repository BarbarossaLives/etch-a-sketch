const button = document.getElementById("generate");
const mainContainer = document.getElementById("container");

button.addEventListener("click", function(){
    const rowcount = parseInt(document.getElementById("row-input").value); 

    function getRandomHexColor() {
        const hex = Math.floor(Math.random() * 0xffffff).toString(16);
        return `#${hex.padStart(6, '0')}`;
    }

    if (isNaN(rowcount) || rowcount<1 || rowcount>200){
        alert("Please enter a whole number between 1 and 200 ");
        return;
    }

    mainContainer.innerHTML = ""
    
    const rowheight = 100/rowcount;
    const totalbox = rowcount*rowcount
    

    for(let r = 0; r<totalbox; r++){
        const box = document.createElement("div");
        box.className = "box";
        box.style.backgroundColor = getRandomHexColor();
        box.style.height = `${rowheight}%`;
        box.style.width = `${rowheight}%`;
        box.innerHTML = "&nbsp;";
        box.addEventListener("mouseenter", function() {
            box.style.backgroundColor = "black";
            })
        mainContainer.appendChild(box);
        
    }

}) 
