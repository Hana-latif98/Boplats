window.onload = function offClick(){

    var kommunButton = document.getElementById("municipilaty-button");
    var kommunDc = document.getElementById("municipilaty-ID");
    
    document.onclick = function kommunClick(e){
        if(e.target === kommunButton){
            kommunDc.classList.toggle("show");
        }
        else if(!e.target.className.includes("dropdownText") || e.target === e.target.id === "municipilaty-ID"){
            kommunDc.classList.remove("show");
        }
    }
} /*open and close kommun dropdown*/

function toggleActive(id) {
    document.getElementById(id).classList.toggle("dropdown-content-active");
    const municipilaty = document.getElementById(id).innerHTML;
    if (document.getElementById("municipilaty-button").innerHTML.includes(municipilaty)) {
        removedChoice = document.getElementById("municipilaty-button").innerHTML.replace(municipilaty + ', ', "");
        document.getElementById("municipilaty-button").innerHTML = removedChoice;
    } else {
        removedAlla = document.getElementById("municipilaty-button").innerHTML.replace('Alla...', '');
        document.getElementById("municipilaty-button").innerHTML = removedAlla;
        document.getElementById("municipilaty-button").innerHTML += municipilaty + ', ';
    }
    if (document.getElementById("municipilaty-button").innerHTML === '') {
        const standardText = ('Alla...');
        document.getElementById("municipilaty-button").innerHTML = standardText;
    }
} /*replace text information for municipilaty drop down*/