function maximumRentDropDown() {
    document.getElementById("maximum-rent-ID").classList.toggle("show");
}

let maximumRent = null
const getValue2 = (value2) => {
    if(value2) {
        maximumRent = value2
        maximumRentDropDown()
        updateMaxRentText2(value2)
    } else {
        // error
    }
}

const maximumRentText = document.getElementById('maximum-rent')

const updateMaxRentText2 = (value2) => {
    if (value2) {
        maximumRentText.innerHTML = value2
    } else {
        maximumRentText.innerHTML = 'Max'
    }
}

updateMaxRentText2() /*maximum rent change text*/