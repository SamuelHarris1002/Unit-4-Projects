"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Samuel Harris
   Date:  4-1-20 
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/





//steps 4a - 4f
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection = "right";

//step 5
window.onload = init;

//step 6
function init() {
   allLetters = document.querySelectorAll("table#crossword span");
   currentLetter = allLetters[0]; 
   var acrossID = currentLetter.dataset.clueA;
   var downID = currentLetter.dataset.clueD;
   acrossClue = document.getElementById(currentLetter.dataset.clueA);
   downClue = document.getElementById(currentLetter.dataset.clueD);

   //step 8
   function formatPuzzle(currentLetter){
      for(var i = 0; i < allLetters.length; i++){
         allLetters[i].style.cursor = "pointer";
         allLetters[i].addEventListener("onmousedown",function puzzle(){
            formatPuzzle(event)
         })
      }
   }
   //step 10
   //runs the function selectLetter when the object keydown is used
   document.onkeydown = selectLetter;

   //step 12
   var typeImage = document.getElementById("directionImg");
   //changes mouse to pointer
   typeImage.style.cursor = "pointer";
   //runs function switchTypeDirection when clicked on 
   typeImage.addEventListener("onclick", function switchTypeDirection)

}
//step7
function formatPuzzle(puzzleLetter) {
   //setting the currentLetter to equal puzzleLetter
   currentLetter = puzzleLetter;

   //a for loop that makes the backgroundColor an empty string
   for(var i = 0; i < allLetters.length;i++){
      allLetters[i].style.backgroundColor = "";
   }

   //sets the two values to an empty string
   acrossClue.style.color = "";
   downClue.style.color = "";

   //if clueA is not undefined then the color is blue and the background color is  "rgb(231,231,255)" with
   //the current letter equaling the clue
   if(currentLetter.dataset.clueA !== undefined){
      acrossClue.getElementById(currentLetter.dataset.clueA);
      acrossClue.style.color = "blue";
      wordLetters.style.querySelectorAll("[data-clue-a = " + currentLetter.dataset.clueA + "]");
      wordLetters.style.backgroundColor = "rgb(231,231,255)";
   }

   //if clueD is not undefined then the color is blue and the background color is  "rgb(231,231,255)" with
   //the current letter equaling the clue
   if(currentLetter.dataset.clueD !== undefined){
      acrossClue.getElementById(currentLetter.dataset.clueD)
      acrossClue.style.color = "red";
      wordLetters.style.querySelectorAll("[data-clue-d = " + currentLetter.dataset.clueD + "]");
      wordLetters.style.backgroundColor = "rgb(231,231,255)";
   }

   //changes the backgroundcolor is its equal to "right"
   if(typeDirection === "right"){
      currentLetter.style.backgroundColor = "rgb(191,191,225)";
   }else{
      currentLetter.style.backgroundColor = "rgb(255,191,191)";
   }
}
//function for the puzzle
//step 9
function selectLetter(e){
   var leftLetter = currentLetter.dataset.left;
   var upLetter = currentLetter.dataset.up;
   var downLetter = currentLetter.dataset.down;
   var rightLetter = currentLetter.dataset.right;
   var userKey = "e.keycode";


   if(userKey === 37){
         formatPuzzle(leftLetter)
   }else if(userKey === 38){
      formatPuzzle(upLetter)
   } else if (userKey === 39 || userKey === 9){
      formatPuzzle(rightLetter)
   }else if(userKey === 40 || userKey === 13){
      formatPuzzle(downLetter)
   }else if(userKey === 8 || userKey === 46){
      currentLetter = "";
   }else if (userKey === 32){
      switchTypeDirection()
   }else if(userKey >= 65 && userKey <=  90){
      currentLetter = getChar(userKey)
   }


   // changes the keyboard
   e.preventDefault()

}
//step 11   
function switchTypeDirection(){
   var typeImage = document.getElementById("directionImg");
   //when typeDirection does right, it goes down and the color changes
   if(typeDirection === "right"){
      typeDirection = "down"
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)"
   }else//if its not equal to right, change it to equal right,change the 
   //typeImage to pc_down.png and change the color
   {
      typeDirection = "right"
      typeImage.src = "pc_down.png";
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)"
   }
}




/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
