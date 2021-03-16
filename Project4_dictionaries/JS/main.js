function my_dictionaray(){ //assigning my function a name. 
    var Horse = {//assigning a variable "horse"
    Species: "Horse",
    Color: "Brown",
    Breed: "Thoroughbred",
    Age: 5,
    Name: "Rosie"
    };
    document.getElementById("Dictionary").innerHTML = Horse.Breed;
}