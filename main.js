// alert('Please provide your phone #.  Dont worry, you can trust me!');
// var i = 0;
// while(i===0){
// 	var phoneNumber = prompt("Phone Number " + "XXX-XXX-XXXX");
// 	if(phoneNumber.length===12) {
// 		if(phoneNumber.charAt(3)==="-" && phoneNumber.charAt(7)==="-"){
// 			alert("Looks good, thanks");
// 			i=1;
// 		}
// 		else {
// 			alert("Please try again!");


// 		}
		
// 	}
// 	else {
// 			alert("Please try again!");
// 		}
// }

alert('Please provide your: date of birth, zip code, state, and maritial status.');
var i = 0;
while (i===0){
	var birthDate = prompt("Date of Birth " + "xx/xx/xx");
	// console.log(birthDate);
	// console.log(birthDate.length);
	// console.log(birthDate.charAt(6));
	if(birthDate.length===8) {
		if(birthDate.charAt(2)==="/" && birthDate.charAt(5)==="/"){
			alert("Looks good, thanks");
			i=1;
		}
		else {
			alert("Please try again!");


		}
		
	}
	else {
			alert("Please try again!");
		}
}

var i = 0;
while (i===0){
var zipCode = prompt("Zip Code " + "xxxxx or xxxxx-xxxx" );
	if(zipCode.length===5 || (zipCode.length===10 && zipCode.charAt(5)==="-")) {
			alert("Looks good, thanks");
			i=1;
		}
		
	else {
			alert("Please try again!");
		}
}

var i = 0;
while (i===0){
var state = prompt("State " + "XX");
	if(state.length===2) {
			state = state.toUpperCase();
			console.log(state);
			alert("Looks good, thanks");
			i=1;
		}
		
	else {
			alert("Please try again!");
		}
}

var i = 0;
while (i===0){
var maritialStatus = prompt("Married ? " + "Yes or No").toUpperCase();
	if(maritialStatus.length===3 && maritialStatus==="YES" || (maritialStatus.length===2 && maritialStatus==="NO")) {

			alert("Looks good, thanks");
			i=1;
		}
		
	else {
			alert("Please try again!");
		}
}
