function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
} /*toggle show myDropDown2*/

let minimumRent = null
const getValue = (value) => {
    if(value) {
        minimumRent = value
        myFunction2()
        updateMinRentText(value)
    } else {
        // error
    }
}

const minimumRentText = document.getElementById('minimum-rent')

const updateMinRentText = (value) => {
    if (value) {
        minimumRentText.innerHTML = value
    } else {
        minimumRentText.innerHTML = 'Min'
    }
}

updateMinRentText() /*minimum rent change text*/