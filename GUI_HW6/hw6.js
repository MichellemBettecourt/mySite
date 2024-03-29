// 
// Homework 6: Multiplication table generator using Embedding javascript
// File: https://michellembettecourt.github.io/mySite/GUI_HW6/hw6.html
// Name: Michelle Bettencourt
// E-mail: michelle_bettencourt@student.uml.edu
// University affiliation: UMass Lowell student in GUI COMP.4610
// Date: November 12, 2019
// Description: We were asked to make a multiplication table generator
// using javascript, HTML and css. The user is asked to input 4 integers
// (negative or positive). The program also accounts for invalid inputs
//
// Copyright (c) 2019 by Michelle M. Bettencourt. All rights reserved. May be
// freely copied or excerpted for educational purposes with credit to the
// author.
//
// Updated by MMB on November 12, 2019


//***************************************************************
// This function is pretty self explanitory
//- First I delete some text that is not irrelivant
//- Then I loop through the table and delete all the row
//***************************************************************
function deleteTable(clear_inputs) {
  var checkElement = document.getElementById('first');
  checkElement.textContent = "";
  var checkElement2 = document.getElementById('check');
  checkElement2.textContent = "";
  document.getElementById('invalid_x').innerHTML = "";
  document.getElementById('invalid_y').innerHTML = "";
  var myTable = document.getElementById("myTable");
  var rowCount = myTable.rows.length;
  //- Then I loop through the table and delete all the row
  for (var x=rowCount-1; x>=0; x--) {
     myTable.deleteRow(x);
   }

   if(clear_inputs) {
     deleteInputs();
   }
}

//***************************************************************
// I needed this function to delete the inputs. So that if
// a they input just one new value the table will refresh
//***************************************************************

function deleteInputs() {
  document.getElementById('x1').value = "";
  document.getElementById('x2').value = "";
  document.getElementById('y1').value = "";
  document.getElementById('y2').value = "";
}

//***************************************************************
// This is the program this is called when the muliplication button is clicked
// -It first clears a older table if it exists
// -Then it reads in the all the varibles
// -It makes sure the variables are ints, if not an error message under it is image_code
// -Finally it orders the numbers correctly and is sent to another function
//***************************************************************

function onClickMult(tableID) {
    deleteTable(false);
    var checkElement = document.getElementById('first');
    document.getElementById('first').innerHTML = "";
    // Then it reads in the all the varibles from the input boxes
    var x1 = document.getElementById('x1').value;
    var x2 = document.getElementById('x2').value;
    var y1 = document.getElementById('y1').value;
    var y2 = document.getElementById('y2').value;
    // Replace the content of that element with the personalized welcome message
    checkElement.textContent = "";
    let hasError = false;
    let  error = "";
    let invalid_x = "";
    let invalid_y = "";
    // Here we are adding error messages depending on the amount of wrong variables
    //If it is a decimal, letter or character it will be flagged as an error to the user
    if(!Number.isInteger(+x1) && !Number.isInteger(+x2)){
        document.getElementById('invalid_x').innerHTML = "BOTH first x and second x are NOT integers";
    } else if(!Number.isInteger(+x1)){
        document.getElementById('invalid_x').innerHTML = "The first x is NOT integer";
    } else if(!Number.isInteger(+x2)){
         document.getElementById('invalid_x').innerHTML = "The second x is NOT integer";
    }

    if(!Number.isInteger(+y1) && !Number.isInteger(+y2)){
      document.getElementById('invalid_y').innerHTML = "BOTH first y and second y are NOT integers";
    }else if(!Number.isInteger(+y1)){
         document.getElementById('invalid_y').innerHTML = "The first y is NOT integer";
    } else if(!Number.isInteger(+y2)){
         document.getElementById('invalid_y').innerHTML = "The second y is NOT integer";
    }
    y1 = parseInt(y1);
    y2 = parseInt(y2);
    x1 = parseInt(x1);
    x2 = parseInt(x2);
    // Finally we order the numbers in assending order
    //To do this I compare all the numbers and it to getTableData accordingly
    if (x2 >= x1 && y2 >= y1) {
      this.getTableData(x1,x2,y1,y2, tableID);
    } else if (x2 < x1 && y2 > y1) {
      this.getTableData(x2,x1,y1,y2, tableID);
    } else if (x2 < x1 && y2 < y1) {
      this.getTableData(x2,x1,y2,y1, tableID);
    } else if (x2 > x1 && y2 < y1) {
      this.getTableData(x1,x2,y1,y2, tableID);
    }
}

//***************************************************************
// This function takes in all 4 number varibles and the table to be manipulated
//- The table is basically generated from bottom to toUpperCase
//- Using nested four loops we go through the table multiplying as we go
//- For each cell we add the integer and a title to be used
// later.
//- I also added some onClick and onHover functions for fun
//***************************************************************

function getTableData(x1,x2,y1,y2, tableID) {
    //we get the table useing byID
    var table = document.getElementById(tableID);
    var k = 1;
    var checkElement = document.getElementById('first');
    checkElement.textContent = "hover over a white tile for more clarity";
    //I basically go row by row, bottom to top
    for (var i = y2; i >= y1; i--) {
        // We insert row first then go from there
        var row = table.insertRow(0);
          //Loops through all the x values
          for (var j = x2; j >= x1; j--) {
            var cell0 = row.insertCell(0);
            //This is where the actual product is added
            cell0.innerHTML = i*j;
            cell0.title = i + " x " + j + " = " + i*j;
            addContents(cell0);
          }
          //Finally I add the actual y value to the first column
          var cell1 = row.insertCell(0);
          cell1.innerHTML = i;
          cell1.title = i + " x 1 = " + i;
          addContents(cell1);
          k++;
    }
    // Similar to the y values I then loop through the x values and add that to the top
    var row = table.insertRow(0);
    for (var i = x2; i >= x1; i--) {
      var cell = row.insertCell(0);
      cell.innerHTML = i;
      cell.title = i + " x  1 = " + i;
      addContents(cell);
    }
    row.insertCell(0).innerHTML = 'X';
}
// For each cell I add onClick and onHover
// The element value is added to the top of table
function addContents(cell) {
  cell.onclick = function(input){
    var checkElement = document.getElementById('check');
    checkElement.textContent = input.srcElement.title;
  };
  cell.onmouseover = function(input){
    var checkElement = document.getElementById('check');
    checkElement.textContent = input.srcElement.title;
  };

}
