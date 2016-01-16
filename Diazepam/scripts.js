// JavaScript Document

function checkForm() {
    var d = document.getElementById('mainForm'); 
    var errors = false;
    var errorMsg = "";

    if (d.name.value == "") {
        errorMsg += "Please enter your name.\n";
        errors = true;
    }
  
    if (errors)
        alert(errorMsg);

    return !errors;
}


function resetForm() {
    var reset = confirm('Reset all fields?');
    if (reset) {
        console.log("Resetting form modifications.");
        
        document.mainForm.nameTick.src = "Images/cross.png";
        document.mainForm.nameTick.alt = "cross";
        document.mainForm.rateTick.src = 'Images/cross.png';
        document.mainForm.rateTick.alt = 'cross';
        document.mainForm.areas.style.background = "#fff";
    }
    return reset;
}

function clearField() {
    if (document.mainForm.login.value == "") {
        document.mainForm.login.value = "";
    }
    alert("Test");
}


function changeStyle(name) {
    document.getElementById(name).style.color = "#FF0000";

}


function changeStyle2(name) {
    document.getElementById(name).style.color = "#999999";
}



function setColourBasedOnLength(name, minValue) {
    var f = document.getElementById(name); 
    if (f.value.length >= minValue)
        f.style.color = "#0C0";
    else
        f.style.color = "#C00";

function nameEntered(name) {
    if (name.value != "") {
        document.mainForm.nameTick.src = "Images/tick.png";
        document.mainForm.nameTick.alt = "tick";
    }
    else {
        document.mainForm.nameTick.src = "Images/cross.png";
        document.mainForm.nameTick.alt = "cross";
    }
}



function clearArea() {
    var areaBoxes = document.mainForm.areaVisited;
    var changeTo = true;
    if (areaBoxes[0].checked)
        changeTo = false;
    for (var i = 0; i < areaBoxes.length; i++) {
        areaBoxes[i].checked = changeTo;
    }
    
    checkArea()
}

