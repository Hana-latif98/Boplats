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

const collectValue = (munID, eleID, inputType2) => {
    
    // check how to check wants in an array
    // check if munID exists in array (if statement)
    // if true - remove munID from array
    // if false - push munID to array


    municipalityArray.push(munID);

    for(let i = 0; i < municipalityArray.length; i++){

        if((municipalityArray[i] === munID)=== municipalityArray[i]){
            municipalityArray.splice(munID);
            console.log('fak');

        } else {
            let print = municipalityArray.toString();

            inputType2 = print;

            const inputElement2 = document.getElementById(eleID);
            inputElement2.innerHTML = inputType2;
        }

        console.log(municipalityArray)
     
    }
}



