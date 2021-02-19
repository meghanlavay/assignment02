let num1 = prompt('Input the first integer');
let num2 = prompt('Input the second integer');                        
if(parseInt(num1) > parseInt(num2)) { 
  document.write(num1 + " is the larger integer.");
} else if(parseInt(num2) > parseInt(num1)) {
    document.write(num2 + " is the larger integer.");
} else {
    document.write("The values "+ num1+ " and "+num2+ " are equal.");
}