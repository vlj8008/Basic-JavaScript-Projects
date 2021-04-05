let activePlayer = 'X' //this variable keeps track of whose turn it is. "let" variable is limited to the block scope. 
let selectedSquares = [];// assigning the let variable "selectedSquare" the value of an empty array. This array
// will store the moves. We use this to determine win conditions. 

//This function is for placing an x or o in  a square.

function placeXOrO(squareNumber){

    if(!selectedSquares.some(element => element.include(squareNumber))){

        let select = document.getElementById(squareNumber);

        if(activePlayer === 'X'){

            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }

        selectedSquares.push(squareNumber+ activePlayer);
        checkWinConditions();

        if (activePlayer === 'X'){
            activePlayer = 'O'
        } else {
            activePlayer = 'X';
        }
    }
}

//This function plays a placement sound.

Audio('./media/place.mp3');

if(activePlayer=== 'O'){

    disableClick();

    setTimeout(function () {computersTurn();}, 1000)
}

return true;

//This function results in random square being selected.

function computersTurn(){
    let success = false;

    let pickASquare;

    while(!success){
        pickASquare = String(Math.floor(Math.random()*9));

        if (placeXOrO(pickASquare)){
            placeXOrO(pickASquare);
            success = true;
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if condition is met.

function checkWinConditions(){
    
    if  (arrayIncludes('OX', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}

    else if (arrayIncludes('3X', '4X','5X' )) {drawWinLine(50, 304, 558, 304)}

    else if (arrayIncludes('6X', '7X','8X' )) {drawWinLine(50, 508, 558, 508)}

    else if (arrayIncludes('0X', '3X','6X' )) {drawWinLine(100, 50, 100, 558)}

    else if (arrayIncludes('1X', '4X','7X' )) {drawWinLine(304, 50, 304, 558)}

    else if (arrayIncludes('2X', '5X','8X' )) {drawWinLine(508, 50, 508, 558)}

    else if (arrayIncludes('6X', '4X','2X' )) {drawWinLine(100, 508, 510, 90)}

    else if (arrayIncludes('0X', '4X','8X' )) {drawWinLine(100, 100, 520, 520)}

    else if (arrayIncludes('0O', '1O','2O' )) {drawWinLine(50, 100, 558, 100)}

    else if (arrayIncludes('3O', '4O','5O' )) {drawWinLine(50, 304, 558, 304)}

    else if (arrayIncludes('6O', '7O','8O' )) {drawWinLine(50, 508, 558, 508)}

    else if (arrayIncludes('0O', '3O','6O' )) {drawWinLine(100, 50, 100, 558)}

    else if (arrayIncludes('1O', '4O','7O' )) {drawWinLine(304, 50, 304, 558)}

    else if (arrayIncludes('2O', '5O','8O' )) {drawWinLine(508, 50, 508, 558)}

    else if (arrayIncludes('6O', '4O','2O' )) {drawWinLine(100, 508, 510, 90)}

    else if (arrayIncludes('0O', '4O','8O' )) {drawWinLine(100, 100, 520, 520)}

    else if (selectedSquares.length>=9) {

        Audio('./media/tie.mp3');

        setTimeout(function () {resetGame();},1000);
    }

function arrayIncludes(squareA, squareB, squareC){

    const a = selectedSquares.includes(squareA)
    const b = selectedSquares.includes(squareB)
    const c = selectedSquares.includes(squareC)

    if (a===true && b ====true && c===true){return true}
}

}