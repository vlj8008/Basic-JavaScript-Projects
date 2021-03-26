// Tech Acad example of While Loop

function count_To_Ten(){
    var Digit = "";
    var X = 1;
    while (X < 11){
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_ten").innerHTML=Digit;
}