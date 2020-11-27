function con(){
	var x=document.getElementById("box").value;
	var data = parseFloat(document.getElementById("box").value);
	var choice = document.getElementById("cars").value;
    
	   
	     if(choice == "Celcius"){
	     print=(data-32)*5/9;
         // print=print+d;
	     document.getElementById("result").value=print+'\xB0C';
         }
         else if(choice == "Fahrenheit"){
	     print=(data*9/5)+32;
	     document.getElementById("result").value=print+'\xB0F';

         }

         else{
         	document.getElementById("result").value=" Please fill all entry correctly";
         }
        
        if (x=="") {
        	document.getElementById("result").value=" Please enter a number";
        }
       
         
}
function txt1(){
     document.getElementById("result").value="";
     document.getElementById("box").value="";
}
