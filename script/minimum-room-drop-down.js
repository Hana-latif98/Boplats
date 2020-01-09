function minimumRoomDropDown() {
    document.getElementById("minimum-room-ID").classList.toggle("show");
}

let minimumRoom = null
const getValue3 = (value3) => {
    if(value3) {
        minimumRent = value3
        minimumRoomDropDown()
        updateMinimumRoomText(value3)
    } else {
        // error
    }
}

const minimumRoomText = document.getElementById('minimum-room')

const updateMinimumRoomText = (value3) => {
    if (value3) {
        minimumRoomText.innerHTML = value3
    } else {
        minimumRoomText.innerHTML = 'Min'
    }
}

updateMinimumRoomText() /*minimum room change text*/