function myFunction2b() {
    document.getElementById("myDropdown2b").classList.toggle("show");
}

let maximumRent = null
const getValue2 = (value2) => {
    if(value2) {
        maximumRent = value2
        myFunction2b()
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