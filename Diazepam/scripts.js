// JavaScript Document

//reset all the form to be Empty
function resetForm() {
    var reset = confirm('Reset all fields?');
    if (reset) {
        console.log("Resetting form modifications.");
     
    }
    return reset;
}

// ======================================= Feed Back Form Validation =================================================
function submitFeedback() {
	var submit = alert("Your feedback has been received!");
    /*if(submit){
		alert("Your feedback has been received!");
	}*/
	return submit;
}

// ======================================= // Feed Back Form Validation =================================================

// ======================================= Check Out Form Validation =================================================
function submitOrder() {
	var fname = document.forms["checkoutForm"]["firstName"].value;
	var address = document.forms["checkoutForm"]["address"].value;
	var code = document.forms["checkoutForm"]["code"].value;
	var phone = document.forms["checkoutForm"]["phone"].value;
	
	while(true){
		var checkTitle = document.getElementById("errorTitle").innerHTML = '<img src="Images/icons/tick.png" width="12" height="12" alt="tick">';
		var checkFname = document.getElementById("errorFname").innerHTML = '<img src="Images/icons/cross.png" width="12" height="12" alt="error">'+" First Name is required";
		var checkLname = document.getElementById("errorLname").innerHTML = '<img src="Images/icons/tick.png" width="12" height="12" alt="tick">';
		var checkAddress = document.getElementById("errorAddress").innerHTML = '<img src="Images/icons/cross.png" width="12" height="12" alt="error">'+" Address is required";
		var checkCode = document.getElementById("errorCode").innerHTML = '<img src="Images/icons/cross.png" width="12" height="12" alt="error">'+" Zip Code is required";
		var checkPhone = document.getElementById("errorPhone").innerHTML = '<img src="Images/icons/cross.png" width="12" height="12" alt="error">'+" Phone is required";
		
		var checkMsg = checkTitle + checkFname + checkLname + checkAddress + checkCode + checkPhone;
		var popupMsg = null;
		
		var num = /^[0-9]+$/;
		
		if(fname == null || fname == ""){
			checkFname = document.getElementById("errorFname").innerHTML = '<img src="Images/icons/cross.png" width="12" height="12" alt="error">'+" Please enter your First Name!";
			document.forms["checkoutForm"]["firstName"].focus();
			
		}
		else{
			checkFname = document.getElementById("errorFname").innerHTML = '<img src="Images/icons/tick.png" width="12" height="12" alt="tick">';
		}
		
		if (address == null || address == ""){
			checkAddress = document.getElementById("errorAddress").innerHTML = '<img src="Images/icons/cross.png" width="12" height="12" alt="error">'+" Please enter your Address!";
			document.forms["checkoutForm"]["address"].focus();
			
		}
		else{
			checkAddress = document.getElementById("errorAddress").innerHTML = '<img src="Images/icons/tick.png" width="12" height="12" alt="tick">';
		}
		
		if (!code.match(num)){
			checkCode = document.getElementById("errorCode").innerHTML = '<img src="Images/icons/cross.png" width="12" height="12" alt="error">'+" Please enter a valid Zip Code!";
			document.forms["checkoutForm"]["code"].focus();
			
		}
		else{
			checkCode = document.getElementById("errorCode").innerHTML = '<img src="Images/icons/tick.png" width="12" height="12" alt="tick">';
		}
		
		if(!phone.match(num)){
			checkPhone = document.getElementById("errorPhone").innerHTML = '<img src="Images/icons/cross.png" width="12" height="12" alt="error">'+" Please enter a valid phone number!";
			document.forms["checkoutForm"]["phone"].focus();
			
		}
		else{
			checkPhone = document.getElementById("errorPhone").innerHTML = '<img src="Images/icons/tick.png" width="12" height="12" alt="tick">';
		}
		
		if (checkFname == '<img src="Images/icons/tick.png" width="12" height="12" alt="tick">' && checkAddress == '<img src="Images/icons/tick.png" width="12" height="12" alt="tick">' && checkCode == '<img src="Images/icons/tick.png" width="12" height="12" alt="tick">' && checkPhone == '<img src="Images/icons/tick.png" width="12" height="12" alt="tick">'){
			//popupMsg = alert("Thank you for your order at Diazepam Cafe!"+n/+"The detail of your order will be sent to you through email");
			popupMsg = alert("Thank you for your order at Diazepam Cafe! The detail of your order will be sent to you through email.");
			if(popupMsg=true){
				window.location="checkout.html";
			}

		}
		else{
			popupMsg = alert("Please check your form again! All the required field must be filled!");
		}
		return false, checkMsg, popupMsg;
	}
	
	return true;
}

// =======================================// Check Out Form Validation =================================================

