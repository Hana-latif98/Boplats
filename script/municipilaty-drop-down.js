window.onload = function offClick(){

    var kommunButton = document.getElementById('dropDownButton');
    var kommunDc = document.getElementById('kommun');
    
    document.onclick = function kommunClick(e){
        if(e.target === kommunButton){
            kommunDc.classList.toggle("show");
        }
        else if(!e.target.className.includes('dropdownText') || e.target === e.target.id === 'kommun'){
            kommunDc.classList.remove("show");
        }
    }
} /*open and close kommun dropdown*/