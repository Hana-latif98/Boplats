const minimumRentDropDown = () => {
    document.getElementById("minimum-rent-ID").classList.toggle("show");
} /*toggle show myDropDown2*/

let minimumRent = null
const getValue = (value) => {
    if(value) {
        minimumRent = value
        minimumRentDropDown()
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