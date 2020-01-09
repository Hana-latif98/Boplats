function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}

let minimumLivingArea = null
const getValue5 = (value5) => {
    if(value5) {
        minimumLivingArea = value5
        myFunction4()
        updateMinimumLivingAreaText(value5)
    } else {
        // error
    }
}

const minimumLivingAreaText = document.getElementById('minimum-living-area')

const updateMinimumLivingAreaText = (value5) => {
    if (value5) {
        minimumLivingAreaText.innerHTML = value5
    } else {
        minimumLivingAreaText.innerHTML = 'Min'
    }
}

updateMinimumLivingAreaText() /*minimum living area change text*/