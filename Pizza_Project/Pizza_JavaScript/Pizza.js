//this initializes our string so it can get passed from function to function growing line
//by line into a full receipt.

function getReceipt(){ 

    var text1 = "<h3> You ordered: </h3>"; //assigning variable "text1" to value "You ordered"
    var runningTotal = 0; //setting "runningTotal" variable to 0
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //assigning variable "sizeArray" by making it equal to all of 
    //the html elements that have class = size. (Personal Pizza, Extra Small etc)

    //setting up a loop to see what size pizza has been checked. 

    for (var i = 0; i < sizeArray.length; i++){ // if "i" is less than the size of the array then complete instructions below, and increase "i" by 1.
        if (sizeArray[i].checked){ // the square brackets mean we have selected an item from the size array. The ".checked" method checks to see if the
                                    // item has been checked by the user. If it has do the following instructions:
            var selectedSize = sizeArray[i].value; //change the var "selectedSize" to the item in the arrays value (ie extra small etc)
            text1 = text1 + selectedSize + "<br>"; //change the var "text 1" to "text 1"("You ordered") concatenated with the "selectedSize" variable
            // ie "Extra small"
        }
    }

        if(selectedSize === "Personal Pizza"){ //if the user selects the value "Personal Pizza" make the sizeTotal = 6.
            sizeTotal = 6;
        } else if (selectedSize ===  "Extra Small"){
            sizeTotal = 8;
        }else if (selectedSize === "Medium Pizza"){
            sizeTotal = 10;
        }else if (selectedSize === "Large Pizza"){
            sizeTotal = 14;
        }else if (selectedSize === "Extra Large Pizza"){
            sizeTotal = 16;
        }

        runningTotal = sizeTotal; //declaring a variable called "runningTotal"
        console.log(selectedSize + " = $ " + sizeTotal + ".00"); //console log eg "Extra Small = $6"
        console.log("size text1: " + text1); //
        console.log("subtotal: $" + runningTotal + ".00"); //console log eg "sub total: $6 

        //these variables (runningTotal and text1) will get passed on to each function. 

        getTopping(runningTotal,text1); //calling the "getTopping" function

};

function getTopping(runningTotal,text1){
    var toppingTotal = 0; //assigning local variable "toppingTotal" to value 0
    var selectedTopping = []; //assigning local variable "selectedTopping" to an array value
    var toppingArray = document.getElementsByClassName("toppings"); //assigning local variable "toppingArray" to the value of the 
    //html elements with the class name "toppings" ie "bacon"

    //setting up a loop to check through the "topping" array

    for (var j = 0; j<toppingArray.length; j++){ // assigning variable "j" value of 0. If the conditions of "j" is less than the toppings
                                                // array length, do the instructions below and increment the value of "j" by one, once done. 
        if(toppingArray[j].checked){ //if an item on the toppings array has been checked do the following instructions:
            selectedTopping.push(toppingArray[j].value); //add the item that has been selected to the var "selectedTopping" array.
            console.log("selected topping item: (" + toppingArray[j].value + ")"); //log to the console eg "selected topping item: Bacon"
            text1 = text1 + toppingArray[j].value + "<br>"; //change variable text1 to equal text1 "You ordered" plus the topping array value eg "Bacon"
        }
    }
    var toppingCount = selectedTopping.length; //assigning a local variable "toppingCount" and making it equal to the length of "selectedTopping"


    if(toppingCount>1){ //if  "toppingCount" is greater than 1
        toppingTotal = (toppingCount - 1); //make "toppingTotal" whatever the "toppingCount" is minus one, to reflect one free topping. 
    } else {
        toppingTotal = 0; // if topping count is not greater than one, set "toppingTotal" to 0
    }

    runningTotal = (runningTotal + toppingTotal); //assigning the value of the "running total" and the "topping total" to be equal to "running total"

    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: "+ text1);
    console.log("Purchase Total: " + "$" + runningTotal + " .00");

    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3> Total: <strong> $" + runningTotal + " .00" + "</strong></h3>";
};