var golfGTICost = 38420;
var totalCost = golfGTICost;
var parkAssistCost = 217.84;
var sunroofCost = 1278.99;
var chassisControlCost = 1151.18;
var alloyWheelsCost = 747.63;
var soundSystemCost = 807.36;
var appConnectCost = 299;
var textField;

var ImgArray = [
  "img/Golf-Black.png",
  "img/Golf-Blue.png",
  "img/Golf-Grey.png",
  "img/Golf-Red.png",
  "img/Golf-White.png"
];

function changeImg(imgNum) {
  document.getElementById('displayImg').src = ImgArray[imgNum];
}

function parkAssist() {
	if (document.getElementById('parkAssist').checked) {
	totalCost+=parkAssistCost;
	} 
}

function sunroof() {
	if (document.getElementById('sunroof').checked) {
	totalCost+=sunroofCost;
	} 
}

function chassisControl() {
	if (document.getElementById('chassisControl').checked) {
	totalCost+=chassisControlCost;
	} 
}

function alloyWheels() {
	if (document.getElementById('alloyWheels').checked) {
	totalCost+=alloyWheelsCost;
	} 
}

function soundSystem() {
	if (document.getElementById('soundSystem').checked) {
	totalCost+=soundSystemCost;
	} 
}

function appConnect() {
	if (document.getElementById('appConnect').checked) {
	totalCost+=appConnectCost;
	} 
}

function buyNow(){
	document.getElementById("display").innerHTML += "<h1 id = 'Order'> Order Details</h1>";
	document.getElementById("display").innerHTML += "<h2>Order Summary:</h2>";
	document.getElementById("display").innerHTML += checkCarColour() + " Golf GTI 2016: <div class='price'> &euro; " + golfGTICost + "</div><br>";
	if (document.getElementById('parkAssist').checked) {
		document.getElementById("display").innerHTML += "Parallel Park Assist incl. Park Distance Control: <div class='price'> &euro; " + parkAssistCost + "</div><br>";
	}
	if (document.getElementById('sunroof').checked) {
		document.getElementById("display").innerHTML += "Panoramic Sunroof: <div class='price'> &euro; " + sunroofCost + "</div><br>";
	}
	if (document.getElementById('chassisControl').checked) {
		document.getElementById("display").innerHTML += "Adaptive Chassis Control (ACC): <div class='price'> &euro; " + chassisControlCost + "</div><br>";
	}
	if (document.getElementById('alloyWheels').checked) {
		document.getElementById("display").innerHTML += "Santiago 19" + '"' + " alloy wheels: <div class='price'> &euro; " + alloyWheelsCost + "</div><br>";
	}
	if (document.getElementById('soundSystem').checked) {
		document.getElementById("display").innerHTML += ' "Dynaudio Excite" Sound system (400 Watt): ' + "<div class='price'> &euro; " + soundSystemCost + "</div><br>";
	}
	if (document.getElementById('appConnect').checked) {
		document.getElementById("display").innerHTML += "App Connect: <div class='price'> &euro; " + appConnectCost + "</div><br>";
	}
	document.getElementById("display").innerHTML += "<hr><br>Total Cost: <div class='price'> &euro; " + totalCost.toFixed(2) + "</div><br><br><br>";
	payment();
}

function payment(){
	document.getElementById("display").innerHTML += "<h2>Payment and Shipping Details:</h2>";
	document.getElementById("display").innerHTML += " Ship To: <div class='paymentDetails'>" + document.getElementById("firstname").value + " " + document.getElementById("lastname").value + "</div><br>";
	document.getElementById("display").innerHTML += "<div class='paymentDetails'>" + document.getElementById("address").value + "</div><br>";
	document.getElementById("display").innerHTML += "<div class='paymentDetails'>" + document.getElementById("county").value + ", " + document.getElementById("country").value + "</div><br><br>";
	
	document.getElementById("display").innerHTML += "Card Type: <div class='paymentDetails'>" + document.getElementById("cardType").value + "</div><br>";
	document.getElementById("display").innerHTML += "Card Holder: <div class='paymentDetails'>" + document.getElementById("cardHolder").value + "</div><br>";
	document.getElementById("display").innerHTML += "Card Number: <div class='paymentDetails'>" + document.getElementById("cardNumber").value + "</div><br>";
	document.getElementById("display").innerHTML += "Expiry Date: <div class='paymentDetails'>" + document.getElementById("month").value + " " + document.getElementById("year").value + "</div><br>";
}

function checkCarColour(){
	if (document.getElementById('Black').checked)
		return "Black";
	if (document.getElementById('Blue').checked)
		return "Blue";
	if (document.getElementById('Grey').checked)
		return "Grey";
	if (document.getElementById('Red').checked)
		return "Red";
	if (document.getElementById('White').checked)
		return "White";
}
