const toggleDropDown = (id) => {
    const dropDownElement = document.getElementById(id);
    dropDownElement.classList.toggle("show");
}


const saveInputValues = (value, inputType, elementID, dropDownID) => {
    let rentMinimum = 0;
    let rentMaximum = 0;
    let roomMinimum = 0;
    let roomMaximum = 0;
    let livingAreaMinimum = 0;
    let livingAreaMaximum = 0;

    inputType = value;

    const inputElement = document.getElementById(elementID);
    inputElement.innerHTML = value;
    toggleDropDown(dropDownID);

}

var municipalityArray = [];

const collectValue = (munID, eleID) => {
    const includesValue = municipalityArray.includes(munID);

    let index = municipalityArray.indexOf(munID);

    if (includesValue) {
        municipalityArray.splice(index, 1);
    } else {
        municipalityArray.push(munID);
    }

    console.log(municipalityArray);

    const inputElement2 = document.getElementById(eleID);
    inputElement2.innerHTML = municipalityArray;

    if(municipalityArray.length === 0){
        const standardText = ('Alla...');
        document.getElementById("municipality-button").innerHTML = standardText;
    }

}

window.onclick = function offClick2(event) {
    if (!event.target.matches('.dropbtn2')) {

        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }

    var municipalityButton = document.getElementById("municipality-button");
    var municipalityDc = document.getElementById("municipality-ID");
    
    document.onclick = function municipalityClick(e){
        if(e.target === municipalityButton){
            municipalityDc.classList.add("show");
        }
        else if(!e.target.className.includes("dropdownText") || e.target === e.target.id === "municipality-ID"){
            municipalityDc.classList.remove("show");
        }
    }
}

// window.onload = function offClick(){

//     var municipalityButton = document.getElementById("municipality-button");
//     var municipalityDc = document.getElementById("municipality-ID");
    
//     document.onclick = function municipalityClick(e){
//         if(e.target === municipalityButton){
//             municipalityDc.classList.toggle("show");
//         }
//         else if(!e.target.className.includes("dropdownText") || e.target === e.target.id === "municipality-ID"){
//             municipalityDc.classList.remove("show");
//         }
//     }
// } /*open and close municipality dropdown*/