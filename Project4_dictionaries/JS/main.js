function my_dictionary(){ //assigning my function a name. 
    var Horse = {//assigning a variable "horse"
    Species: "Horse",  //assigning some key value items
    Color: "Brown",
    Breed: "Thoroughbred",
    Age: 5, // no need for quotation marks as data type is numerical. 
    Name: "Rosie"
    };
    document.getElementById("dictionary").innerHTML = Horse.Breed; // inserts the horse breed (thoroughbred) in to the HTML element that has 
    //the ID "dictionary"
    delete Horse.Color;
    document.getElementById("col").innerHTML = Horse.Color;

}