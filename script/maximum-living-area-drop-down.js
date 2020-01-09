function myFunction4b() {
    document.getElementById("myDropdown4b").classList.toggle("show");
}

let maximumLivingArea = null
const getValue6 = (value6) => {
    if(value6) {
        maximumLivingArea = value6
        myFunction4b()
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