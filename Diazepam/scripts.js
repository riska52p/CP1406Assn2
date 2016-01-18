// JavaScript Document

function resetForm() {
    var reset = confirm('Reset all fields?');
    if (reset) {
        console.log("Resetting form modifications.");
     
    }
    return reset;
}

function checkForm() {
	var bool = false;
    var fname = document.forms["orderForm"]["firstName"].value;
	var lname = document.forms["orderForm"]["familyName"].value;
	var address = document.forms["orderForm"]["address"].value;
	var code = document.forms["orderForm"]["code"].value;
	var phone = document.forms["orderForm"]["phone"].value;
	
	if (fname == null || fname == ""){
		alert("First name must be filled out");
		bool = false;
	}
	
	else if (lname == null || lname == "") {
		alert("Family name must be filled out");
		bool = false;
	}
	
	else if (address == null || address == ""){
		alert("Address must be filled out");
		bool = false;
	}
	
	else if (code == null || address == ""){
		alert("Zip Code must be filled out");
		bool = false;
	}
	
	else if (phone == null || phone == ""){
		alert("Phone must be filled out");
		bool = false;
	}
	//var c = simpleCart.checkout.PayPal();
	else{
		bool = true;
		var c = simpleCart.checkout.PayPal();
		}
	return bool, c;
}

function clickSubmit(){
	var X = checkForm();
	if(X == true){
		window.location="javascript:;";
	}
	else{
		return;
	}
}
/*
function checkForm(){
	var check = alert("Thank you for shopping with us! /n "+
	"Now, you will be directed into our payment gateway. /n "+
	"Please make sure you enter the correct information!");
	
	if(check == true){
		simpleCart.checkout();
	}
}*/
