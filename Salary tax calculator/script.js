//EVENT LISTENER FOR BUTTON ON CLICK
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',calculate,false);
    
//TAKE INPUT FROM BOTH TEXT BOXES
    function calculate(){
		
		tax1 = 0;
		tax2 = 0;
		tax4 = 0;
		
		//takes the 2 user inputs and converts the variables into numbers
        var taxincome = parseInt(document.getElementById("input1").value);

	if (taxincome < 10000) {
       //run this code if salary entered is < 10000	
		document.getElementById("output1").innerHTML = taxincome;
		document.getElementById("output2").innerHTML = taxincome;
		document.getElementById("output3").innerHTML = 0;
		document.getElementById("output4").innerHTML = 0;
		document.getElementById("output5").innerHTML = taxincome;
       } 
		
	else if (taxincome > 10000 && taxincome < 31000) {
		//run this code if salary entered is btween 10000 and 31000	
          var tax2 = (taxincome - 10000)* 0.2;
		  var net = taxincome - tax2;
		taxFree = 10000
		document.getElementById("output1").innerHTML = taxincome;
		document.getElementById("output2").innerHTML = taxFree;
		document.getElementById("output3").innerHTML = tax2;
		document.getElementById("output4").innerHTML = 0;
		document.getElementById("output5").innerHTML = net;
       } 
		
		
	else {
		//run this code if salary entered is greater 31000
		  var tax2 = 21000 * .2;
		  var tax4 = (taxincome - 31000)* 0.4;
		  var net = taxincome - tax2 - tax4;
		taxFree = 10000
		document.getElementById("output1").innerHTML = taxincome;
		document.getElementById("output2").innerHTML = taxFree;
		document.getElementById("output3").innerHTML = tax2;
		document.getElementById("output4").innerHTML = tax4;
		document.getElementById("output5").innerHTML = net;
       }     
    } //used to end the function