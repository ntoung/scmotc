function zipcodeValidation(data)
{
	console.log("validateZip");
	//var zipcode = data.valueOf();
	var lengthCheck = data.toString();
	//implement the check for Nevada and Southern CA specific zipcodes  
	alert(lengthCheck.length()); 
	if (  (lengthCheck.length()) != 5 ) {	
		alert("Not a valid zip-code");
		return false; 
	}
	else 
		return true; 
}