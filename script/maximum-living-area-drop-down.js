function maximumLivingAreaDropDown() {
    document.getElementById("maxLivingAreaDropDown").classList.toggle("show");
}

let maximumLivingArea = null
const getValue6 = (value6) => {
    if(value6) {
        maximumLivingArea = value6
        maximumLivingAreaDropDown()
        updateMaximumLivingAreaText(value6)
    } else {
        // error
    }
}

const maximumLivingAreaText = document.getElementById('maximum-living-area')

const updateMaximumLivingAreaText = (value6) => {
    if (value6) {
        maximumLivingAreaText.innerHTML = value6
    } else {
        maximumLivingAreaText.innerHTML = 'Max'
    }
}

updateMaximumLivingAreaText() /*maximum living area change text*/