let activePlayer = 'X'; //this variable keeps track of whose turn it is. "let" variable is limited to the block scope. 
let selectedSquares = [];// assigning the let variable "selectedSquare" the value of an empty array. This array
// will store the moves. We use this to determine win conditions. 

//This function is for placing an x or o in  a square.

function placeXOrO(squareNumber) {

    if (!selectedSquares.some(element => element.includes(squareNumber))) { //stipulates condition. Uses the "include" method and the "some" method
        // to check each element of the selectedSquares array to see if it contains a square number clicked on. If not, it executes the instructions below.  
        

        let select = document.getElementById(squareNumber); //instruction to computer that "select" is equal to HTML element with ID squareNumber. 

        if (activePlayer === 'X') { // active player equal value and equal type to X.

            select.style.backgroundImage = 'url("images/x.png")'; //instruction to set a background image to "x png" 

        } else {
            select.style.backgroundImage = 'url("images/o.jpg")'; // else make background image "o.png"
        }

        selectedSquares.push(squareNumber + activePlayer); // "push" method adds a new item to an array. In this case we are adding the square number (ie 0-8) 
        // and concatenating that with the active player (either X or O) and adding it to our "selectedSquares" array. 

        checkWinConditions(); //calling a function called "checkWinConditions"


        //Following condition is for changing the active player.

        if (activePlayer === 'X') { // condition - if variable "activePlayer" is equal to X (which is user).
            activePlayer = 'O'; // make activePlayer equal to O (which is computer)

        } else {
            activePlayer = 'X'; //else make activePlayer equal to X
        }

        audio('./media/place.mp3'); //This function plays a placement sound.

         if (activePlayer === 'O') { //if the active player is equal to the computer

            disableClick(); //calls the "disableClick" function if the next player is the computer. Meaning the user can not click again until computer has had a go. 

            setTimeout(function () { computersTurn(); }, 1000) //this "setTimeout" method calls a function after a certain number of milliseconds. 
            //In our case, it calls the "computerTurn" function after 1000 milliseconds. 
        }

        return true; // Return true is needed for the computersTurn() function to work. 
    }
//This function results in random square being selected.

    function computersTurn() {

    let success = false; // this boolean is needed for while loop

    let pickASquare; // declaring  the let variable "pickASquare" which stores a random number from 0-8

    //This condition allows while loop to keep trying if a square is selected already

        while (!success) { //while NOT success is False

            pickASquare = String(Math.floor(Math.random() * 9)); // a random number between 0 and 8 is selected. 

            //If the random number evaluated returns "True" the square hasn't been selected yet

            if (placeXOrO(pickASquare)) {

                placeXOrO(pickASquare); //calls the function that places the X or O
                success = true; //changes the boolean and ends the loop. 
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if condition is met.

function checkWinConditions() {

    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) } // Using the "arrayIncludes" method which checks to see if 
    //and array contains a specific element (in our case the top row of Xs. If it does, the instruction is to draw win line

    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) } //if array has second row with Xs draw win line. 

    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }// if array has third row with Xs draw win line. 

    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) } // if array has first column with Xs draw win line. 

    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) } // if array has second column with Xs draw win line. 

    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) } //if array has third column with Xs draw win line. 

    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) } //if array has diagonal line with Xs draw win line. (looks like /)

    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) } // if array has diagonal line with Xs draw win line. (looks like \)

    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) } // if array has top row with Os draw win line.

    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) } // if array has second row with Os draw win line.

    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) } //if array has third row with Os draw win line. 

    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) } //if array has first column with Os draw win line. 

    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }//if array has second column with Os draw win line. 

    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) } //if array has third column with Os draw win line. 

    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) } //if array has diagonal line with Os draw win line. (looks like /)

    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) } //if array has diagonal line with Os draw win line. (looks like \)

    // this condition checks for a tie. If none of the above conditions register and 9 squares are selected the following code is executed. 

    else if (selectedSquares.length >= 9) { // Using the "length" method to determine if the selected square array has greater than or equal
        // to 9 elements (which would indicate a tie). If it does the computer is to do the following:

        audio('./media/tie.mp3'); // play audio which is the "tie" sound. 

        setTimeout(function () { resetGame(); }, 1000); // this calls the "resetGame" function after 1000 milliseconds. 
    }

    //This function checks if an array includes 3 strings. It is used to check for each win condition. 

    function arrayIncludes(squareA, squareB, squareC) { //three variables (square A, B and C) will be used to check for 3 in a row. 

        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)

        if (a === true && b === true && c === true) { return true } //if variables we pass in are all included in our array then return "true"
        //the Else if condition [line 116] executes the drawWinLine function. 
    }

}

//This function makes body element temporarily unclickable. 

function disableClick() {
    body.style.pointerEvents = 'none'; //makes  "body" unclickable.
    setTimeout(function () { body.style.pointerEvents = 'auto'; } ,1000); //"pointerEvents = auto, means the body will become clickable
    // again (after 1000 milliseconds).

}

//This function takes a string parameter of the path set earlier for placement sound ('./media/place.mp3)

function audio(audioURL) {

    let audio = new Audio(audioURL); //create a new audio object and pass the path as a parameter. 

    audio.play(); //plays the audio sound. 
}

function resetGame() {

    for (let i = 0; i < 9; i++) { // loop iterates through each HTML square element

        let square = document.getElementById(String(i)) // gets HTML element of i (which is 0 to 8)

        square.style.backgroundImage = '' //removes background image. 
    }

    //this resets array to empty so we can start over. 
    selectedSquares = [];
}
//This function utilizes HTML canvas to draw win lines. 

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {

    const canvas = document.getElementById('win-lines') //this line accesses our HTML canvas element. 

    const c = canvas.getContext('2d'); //this line gives us access to methods and properties to use on the canvas. "2d" means two dimensions. 

    let x1 = coordX1, //indicates starting point of line on x axis. 

        y1 = coordY1, //indicates starting point of a line on y axis. 

        x2 = coordX2, // indicates ending point of line on x axis. 

        y2 = coordY2, // indicates ending point of line on y axis. 

        x = x1, //this variable stores temporary x axis data we update in our animation loop. 

        y = y1; //this variable stores temporary y axis data we update in our animation loop. 



//this function interacts with the canvas.

    function animateLineDrawing() {

        const animationLoop = requestAnimationFrame(animateLineDrawing); //"requestAnimationFrame" tells browser we wish to perform an animation and requests the 
        //browser calls the function "animateLineDrawing"

        c.clearRect(0, 0, 608, 608) //this method clears content from last loop iteration. 

        c.beginPath(); //this method starts a new path.

        c.moveTo(x1, y1) //this method indicates start point in line

        c.lineTo(x, y) //this method indicates end point in line 

        c.lineWidth = 10; //this method sets line width. 

        c.strokeStyle = "rgba(70,70,255,0.8)" //this method sets color of line. 

        c.stroke(); //this method draws everything laid out above. 

        //This condition checks if endpoint has been reached. 

        if (x1 <= x2 && y1 <= y2) {

            if (x < x2) { x += 10; } //this condition adds 10 to the previous end x point. 

            if (y < y2) { y += 10; } //this condition adds 10 to the previous end y point. 

            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } //this condition cancels our animation loop if we have reached the end points. 
        }

        //This condition is similar to one above. It is neccesary for the 6,4,2 win condition [/]

        if(x1 <= x2 && y1 >=y2){
            if (x< x2){x += 10;}
            if (y > y2){y -= 10;}
            if (x >= x2 && y<= y2){cancelAnimationFrame(animationLoop);}
        }
    }

    //this function clears canvas after win line is drawn.

    function clear() {

        const animationLoop = requestAnimationFrame(clear); //starts animation loop

        c.clearRect(0, 0, 608, 608); //clears canvas or rectangle.

        cancelAnimationFrame(animationLoop); //stops animation loop
    }

// this line disables clicking while the win sound is playing.

    disableClick();

    audio('./media/winGame.mp3'); // plays win sounds

    animateLineDrawing(); //calls main animation loop

    setTimeout(function () { clear(); resetGame(); }, 1000); //waits 1 second, then clears canvas, resets game, and allows clicking again. 

//Function resets game in event of a tie or a win

}