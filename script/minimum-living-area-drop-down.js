function minimumLivingAreaDropDown() {
    document.getElementById("minimum-living-area-ID").classList.toggle("show");
}

let minimumLivingArea = null
const getValue5 = (value5) => {
    if(value5) {
        minimumLivingArea = value5
        minimumLivingAreaDropDown()
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