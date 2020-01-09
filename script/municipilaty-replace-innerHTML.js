function toggleActive(id) {
    document.getElementById(id).classList.toggle("dropdown-content-active");
    const name = document.getElementById(id).innerHTML;
    if (document.getElementById('dropDownButton').innerHTML.includes(name)) {
        removedChoice = document.getElementById('dropDownButton').innerHTML.replace(name + ', ', "");
        document.getElementById('dropDownButton').innerHTML = removedChoice;
    } else {
        removedAlla = document.getElementById('dropDownButton').innerHTML.replace('Alla...', '');
        document.getElementById('dropDownButton').innerHTML = removedAlla;
        document.getElementById('dropDownButton').innerHTML += name + ', ';
    }
    if (document.getElementById('dropDownButton').innerHTML === '') {
        const text = ('Alla...');
        document.getElementById('dropDownButton').innerHTML = text;
    }
} /*replace text information for municipilaty drop down*/