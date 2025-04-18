const button = document.getElementById("generate");
const mainContainer = document.getElementById("container");

button.addEventListener("click", function(){
    const rowcount = parseInt(document.getElementById("row-input").value, 10); 

    if (isNaN(rowcount) || rowcount<1 || rowcount>100){
        alert("Please enter a whole number between and 100");
        return;
    }

    mainContainer.innerHTML = ""

    let counter=1;

    for(let r = 0; r<rowcount; r++){
        const row = document.createElement("div");
        row.classname="row";

        for(let c = 0; c<rowcount; c++){
            const box = document.createElement("div")
            div.className = "box";
            box.textContent = counter++
            row.appendChild(box);
        }
    }mainContainer.appendChild(row);

})