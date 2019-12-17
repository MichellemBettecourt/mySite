//
// Homework 9: Generate scrabble board game
// File: https://michellembettecourt.github.io/mySite/GUI_HW9/hw9.html
// File: https://michellembettecourt.github.io/mySite/GUI_HW9/hw9.html
// Name: Michelle Bettencourt
// E-mail: michelle_bettencourt@student.uml.edu
// University affiliation: UMass Lowell student in GUI COMP.4610
// Date: December 16, 2019
// Description: We were asked to make a multiplication table generator
// using javascript, HTML and css. The user is asked to input 4 integers
// (negative or positive). The program also accounts for invalid inputs
//
// Copyright (c) 2019 by Michelle M. Bettencourt. All rights reserved. May be
// freely copied or excerpted for educational purposes with credit to the
// author.
//
// Updated by MMB on December 16, 2019

//scrabble tiles object from prof. Heines
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12 } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2  } ;

//Scrabble board to track multiplying tiles
var ScrabbleBoard = [] ;
ScrabbleBoard["TrippleWord"] = ["224",  "217",  "210", "119", "105", "14", "7", "0"];
ScrabbleBoard["DoubleLetter"] = ["221", "213", "186", "188",  "179",  "172", "165", "122" ,"126",  "128",  "132", "116", "108", "102", "98", "96" , "92",  "45",  "52", "59", "38", "36", "11", "3"] ;
ScrabbleBoard["DoubleWord"] = ["16", "28", "32", "42",  "56",  "48", "70", "64" ,"160",  "154",  "176", "168", "182", "192", "208", "196"];
ScrabbleBoard["TrippleLetter"] = ["20", "24", "88", "84",  "80",  "76", "136", "140" ,"144",  "148",  "204", "200"];

var tableID_div = "";
var tableID = "";
var allBoardTileIds = "";
var playerOneScore = 0;
var currentWord = 0;
var  bag = [];
var wordSubmitted = false;

//***************************************************************
// Init function to get first 7 letters
//***************************************************************
//bag of letters
function initLetters() {
				const tilesJson = {"pieces": [
				{"letter":"A", "value":1,  "amount":9},
				{"letter":"A", "value":1,  "amount":9},
				{"letter":"A", "value":1,  "amount":9},
				{"letter":"A", "value":1,  "amount":9},
				{"letter":"A", "value":1,  "amount":9},
				{"letter":"A", "value":1,  "amount":9},
				{"letter":"A", "value":1,  "amount":9},
				{"letter":"A", "value":1,  "amount":9},
				{"letter":"B", "value":3,  "amount":2},
				{"letter":"B", "value":3,  "amount":2},
				{"letter":"C", "value":3,  "amount":2},
				{"letter":"C", "value":3,  "amount":2},
				{"letter":"D", "value":2,  "amount":4},
				{"letter":"D", "value":2,  "amount":4},
				{"letter":"D", "value":2,  "amount":4},
				{"letter":"D", "value":2,  "amount":4},
				{"letter":"E", "value":1,  "amount":12},
				{"letter":"E", "value":1,  "amount":12},
				{"letter":"E", "value":1,  "amount":12},
				{"letter":"E", "value":1,  "amount":12},
				{"letter":"E", "value":1,  "amount":12},
				{"letter":"E", "value":1,  "amount":12},
				{"letter":"E", "value":1,  "amount":12},
				{"letter":"E", "value":1,  "amount":12},
				{"letter":"E", "value":1,  "amount":12},
				{"letter":"E", "value":1,  "amount":12},
				{"letter":"E", "value":1,  "amount":12},
				{"letter":"E", "value":1,  "amount":12},
				{"letter":"F", "value":4,  "amount":2},
				{"letter":"F", "value":4,  "amount":2},
				{"letter":"G", "value":2,  "amount":3},
				{"letter":"G", "value":2,  "amount":3},
				{"letter":"G", "value":2,  "amount":3},
				{"letter":"H", "value":4,  "amount":2},
				{"letter":"H", "value":4,  "amount":2},
				{"letter":"I", "value":1,  "amount":9},
				{"letter":"I", "value":1,  "amount":9},
				{"letter":"I", "value":1,  "amount":9},
				{"letter":"I", "value":1,  "amount":9},
				{"letter":"I", "value":1,  "amount":9},
				{"letter":"I", "value":1,  "amount":9},
				{"letter":"I", "value":1,  "amount":9},
				{"letter":"I", "value":1,  "amount":9},
				{"letter":"I", "value":1,  "amount":9},
				{"letter":"J", "value":8,  "amount":1},
				{"letter":"K", "value":5,  "amount":1},
				{"letter":"L", "value":1,  "amount":4},
				{"letter":"L", "value":1,  "amount":4},
				{"letter":"L", "value":1,  "amount":4},
				{"letter":"L", "value":1,  "amount":4},
				{"letter":"M", "value":3,  "amount":2},
				{"letter":"M", "value":3,  "amount":2},
				{"letter":"N", "value":1,  "amount":6},
				{"letter":"N", "value":1,  "amount":6},
				{"letter":"N", "value":1,  "amount":6},
				{"letter":"N", "value":1,  "amount":6},
				{"letter":"N", "value":1,  "amount":6},
				{"letter":"N", "value":1,  "amount":6},
				{"letter":"O", "value":1,  "amount":8},
				{"letter":"O", "value":1,  "amount":8},
				{"letter":"O", "value":1,  "amount":8},
				{"letter":"O", "value":1,  "amount":8},
				{"letter":"O", "value":1,  "amount":8},
				{"letter":"O", "value":1,  "amount":8},
				{"letter":"O", "value":1,  "amount":8},
				{"letter":"O", "value":1,  "amount":8},
				{"letter":"P", "value":3,  "amount":2},
					{"letter":"P", "value":3,  "amount":2},
				{"letter":"Q", "value":10, "amount":1},
				{"letter":"R", "value":1,  "amount":6},
				{"letter":"R", "value":1,  "amount":6},
				{"letter":"R", "value":1,  "amount":6},
				{"letter":"R", "value":1,  "amount":6},
				{"letter":"R", "value":1,  "amount":6},
				{"letter":"R", "value":1,  "amount":6},
				{"letter":"S", "value":1,  "amount":4},
				{"letter":"S", "value":1,  "amount":4},
				{"letter":"S", "value":1,  "amount":4},
				{"letter":"S", "value":1,  "amount":4},
				{"letter":"T", "value":1,  "amount":6},
				{"letter":"T", "value":1,  "amount":6},
				{"letter":"T", "value":1,  "amount":6},
				{"letter":"T", "value":1,  "amount":6},
				{"letter":"T", "value":1,  "amount":6},
				{"letter":"T", "value":1,  "amount":6},
				{"letter":"U", "value":1,  "amount":4},
				{"letter":"U", "value":1,  "amount":4},
				{"letter":"U", "value":1,  "amount":4},
				{"letter":"U", "value":1,  "amount":4},
				{"letter":"V", "value":4,  "amount":2},
				{"letter":"V", "value":4,  "amount":2},
				{"letter":"W", "value":4,  "amount":2},
				{"letter":"W", "value":4,  "amount":2},
				{"letter":"X", "value":8,  "amount":1},
				{"letter":"Y", "value":4,  "amount":2},
				{"letter":"Y", "value":4,  "amount":2},
				{"letter":"Z", "value":10, "amount":1},
				{"letter":"_", "value":0,  "amount":2},
				{"letter":"_", "value":0,  "amount":2}
			],
			};
		bag = tilesJson.pieces;
		//we initially go through the bag and randomly select 7 tiles
     var i;
     for (i = 0; i < 7; i++) {
			var k = getRndInteger(1, bag.length - 1);
      let tile = bag[k];
			bag.splice(k,1);
			//for each tile I man an img
			//The image includes the actual src img class for draggable style and id
      if ( tile.letter)
          var txt4 = "<img class=\"tile onBoard draggable\" id=\"" + tile.letter + i + "\" src=\"Scrabble_Tiles/Scrabble_Tile_" + tile.letter + ".jpg\">"
      else i--;
			//insert it into the div labeled list that has the holder
      $("#list1").prepend(txt4);
    }
		//update bag tracker
		document.getElementById('bag').innerHTML = "Letters in bag: " + bag.length;

  };
initLetters();

//custom randomeizer
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//***************************************************************
// Making the grid givs
//***************************************************************
function addGridDivs() {
	//there are 255 board pieces in a board so for each in the grid I add a div
  for (i = 0; i < 225; i++) {
    allBoardTileIds += "#board_" + i + ", ";
    var txt4 = "<div id=\"board_" + i + "\" class=\"grid-item\"></div>"
    $("#grid-container").prepend(txt4);
  }
}

//***************************************************************
// Function called right after piece is on board
//***************************************************************
function snapToMiddle(dragger, target){
			wordSubmitted = false; //switch flag
      var src = dragger[0].src; //Get letter from img
      var letter = src[src.length -5];
			var letterValue = ScrabbleTiles[letter].value;
      var target = target[0].id; //Get tile number from targer
       var tileNumber = target.substring(target.indexOf('_') + 1, target.length);
			 //If it is an important tile, do it!
      if (ScrabbleBoard.DoubleLetter.includes(tileNumber))
          letterValue = letterValue * 2;
      if (ScrabbleBoard.TrippleLetter.includes(tileNumber))
        	letterValue = letterValue * 3;

			//Keep track of current work for work multipliers
			currentWord = currentWord + letterValue;

			if (ScrabbleBoard.TrippleWord.includes(tileNumber))
					currentWord = currentWord * 3;
			if (ScrabbleBoard.DoubleWord.includes(tileNumber))
					currentWord = currentWord * 2;

			//Keep track of a temporary score for word multiplying
			var tempScore = playerOneScore + currentWord;
			//Tell the user
      document.getElementById('totalScore').innerHTML = "Total Score: " + tempScore;
		  document.getElementById('wordScore').innerHTML = "Word Score: " + currentWord;
}
//***************************************************************
// When submit word is clicked
//***************************************************************
function submitWord(){
	//Add current word to actual score
	playerOneScore = playerOneScore + currentWord;
	//Reset current word
	currentWord = 0;
	document.getElementById('wordScore').innerHTML = "";
	wordSubmitted = true; //mark flag
	//Tell user
	document.getElementById('getMoreTiles').innerHTML = "Get more tiles before moving another tile!!";
	document.getElementById('noWordError').innerHTML = "";
}

function newGame(){
	//On newgame remove all the tiles and clear all scores
	$('.tile').remove();
	document.getElementById('wordScore').innerHTML = "";
	document.getElementById('totalScore').innerHTML = "";
	document.getElementById('getMoreTiles').innerHTML = "";
	document.getElementById('getMoreTiles').innerHTML = "";
	document.getElementById('noWordError').innerHTML = "";
	//call init again
	initLetters();
}

//***************************************************************
//  When more letters is clicked
//  very similar to init
//***************************************************************
function moreLetters(){
	// you can only get more tiles once your word  is Submitted
	if (wordSubmitted) {
		 	// if there was an error, delete it
			document.getElementById('getMoreTiles').innerHTML = "";
			var i;
			var output = "";
			$('.ui-sortable-placeholder').remove();
			//Get every tile on the holder
			 var onBoard = document.getElementsByClassName("tile onBoard");
			 //note how many are actually on there
			 var toThis = 7 - onBoard.length;
			 //add all these tiles to the output so that the tiles move to the left
			 for (i = 0; i < onBoard.length; i++) {
				 output += onBoard[i].outerHTML;
			 }
			 //remove all from list
			document.getElementById('list1').innerHTML = "";
			//Add in the correct num of missing tile imgs
			for (i = 0; i < toThis; i++) {
				var k = getRndInteger(1, bag.length - 1);
				let tile = bag[k];
				bag.splice(k,1);
				if ( tile.letter)
						output  += "<img class=\"tile\" id=\"" + tile.letter + i + "\" src=\"Scrabble_Tiles/Scrabble_Tile_" + tile.letter + ".jpg\">"
				else i--;
			}

			//Tell the user
			document.getElementById('list1').innerHTML = output;
			document.getElementById('bag').innerHTML = "Letters in bag: " + bag.length;
		}
		else {
			document.getElementById('noWordError').innerHTML = "You have to submit the word to get more tiles!";
		}
}

$(document).ready(function () {
    addGridDivs();
		//Make the holder div sortable
    $(function () {
        $("#list1, #list2").sortable({
            connectWith: ".grid-item",
            cursor: "move"
        }).disableSelection();
    });
		//Each tile is first given the class draggable
    $( "draggable" ).draggable({
			revert: 'invalid',
			helper: 'clone',
		});
		//make each .grid item droppable
		//I got these methods from jquery website and combined them
	 // https://www.geeksforgeeks.org/jquery-ui-draggable-and-droppable-methods/
    $( ".grid-item" ).droppable({
      drop: function( event, ui ) {
			         snapToMiddle(ui.draggable,$(this));
							 var $this = $(this);
							 draggedElement = $(ui.draggable); // Tile
							 dropZone = $(event.target); //Board spot
							 $(dropZone).append(draggedElement);
							 draggedElement.removeClass("onBoard"); // Remove on board
							 draggedElement.removeClass("draggable ui-sortable-handle ui-sortable-helper");
							 // Center it in the middle of the board piece
							 ui.draggable.position({
								 my: "center",
								 at: "center",
								 of: $this,
								 using: function(pos) {
									 $(this).animate(pos, 200, "linear");
								 }
				 		 	});
			 },
			over: function( event, ui ) {
        ui.helper
          .addClass("ui-over")
      },
      out: function( event, ui ) {
        ui.helper
          .removeClass("ui-over")
          .removeClass("container1")
          .removeClass("container2");
      }
    });
    $(".grid-item").sortable({
        connectWith: ".grid-item",
        cursor: "move"
    }).disableSelection();
});
