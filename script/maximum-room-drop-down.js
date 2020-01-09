function myFunction3b() {
    document.getElementById("myDropdown3b").classList.toggle("show");
}

let maximumRoom = null
const getValue4 = (value4) => {
    if(value4) {
        maximumRoom = value4
        myFunction3b()
        updateMaximumRoomText(value4)
    } else {
        // error
    }
}

const maximumRoomText = document.getElementById('maximum-room')

const updateMaximumRoomText = (value4) => {
    if (value4) {
        maximumRoomText.innerHTML = value4
    } else {
        maximumRoomText.innerHTML = 'Max'
    }
}

updateMaximumRoomText() /*maximum rent change text*/
