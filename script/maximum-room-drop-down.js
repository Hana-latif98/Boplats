const maximumRoomDropDown = () => {
    document.getElementById("maximum-room-ID").classList.toggle("show");
}

let maximumRoom = null
const getValue4 = (value4) => {
    if(value4) {
        maximumRoom = value4
        maximumRoomDropDown()
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
