window.onload = function offClick(){

    var municipalityButton = document.getElementById("municipality-button");
    var municipalityDc = document.getElementById("municipality-ID");
    
    document.onclick = function municipalityClick(e){
        if(e.target === municipalityButton){
            municipalityDc.classList.toggle("show");
        }
        else if(!e.target.className.includes("dropdownText") || e.target === e.target.id === "municipality-ID"){
            municipalityDc.classList.remove("show");
        }
    }
} /*open and close municipality dropdown*/

function toggleActive(id) {
    document.getElementById(id).classList.toggle("dropdown-content-active");
    const municipality = document.getElementById(id).innerHTML;
    if (document.getElementById("municipality-button").innerHTML.includes(municipality)) {
        removedChoice = document.getElementById("municipality-button").innerHTML.replace(municipality + ', ', "");
        document.getElementById("municipality-button").innerHTML = removedChoice;
    } else {
        removedAlla = document.getElementById("municipality-button").innerHTML.replace('Alla...', '');
        document.getElementById("municipality-button").innerHTML = removedAlla;
        document.getElementById("municipality-button").innerHTML += municipality + ', ';
    }
    if (document.getElementById("municipality-button").innerHTML === '') {
        const standardText = ('Alla...');
        document.getElementById("municipality-button").innerHTML = standardText;
    }
} /*replace text information for municipality drop down*/