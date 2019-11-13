//
// INCLASS 4: Embedding javascript
// File: http://weblab.cs.uml.edu/~mbettenc/
// Name: Michelle Bettencourt
// E-mail: michelle_bettencourt@student.uml.edu
// University affiliation: UMass Lowell student in GUI COMP.4610
// Date: October 29, 2019
// Description: Use Javasctict to match documents.
//
// Copyright (c) 2019 by Michelle M. Bettencourt. All rights reserved. May be
// freely copied or excerpted for educational purposes with credit to the
// author.
//
// Updated by MMB on October 29, 2019
//
// Create variables for the welcome message

function getTableData(x1,x2,y1,y2, tableID) {
    var table = document.getElementById(tableID);
    var k = 1;
    var checkElement = document.getElementById('first');
    checkElement.textContent = "hover over a white tile for more clarity";
    for (var i = y2; i >= y1; i--) {
        var row = table.insertRow(0);
          for (var j = x2; j >= x1; j--) {
            var cell0 = row.insertCell(0);
            cell0.innerHTML = i*j;
            cell0.title = i + " x " + j + " = " + i*j;
            addContents(cell0);
          }
          var cell1 = row.insertCell(0);
          cell1.innerHTML = i;
          cell1.title = i + " x 1 = " + i;
          addContents(cell1);
          k++;
    }
    var row = table.insertRow(0);
    for (var i = x2; i >= x1; i--) {
      var cell = row.insertCell(0);
      cell.innerHTML = i;
      cell.title = i + " x  1 = " + i;
      addContents(cell);
    }
    row.insertCell(0).innerHTML = 'X';
}

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


function onClickMult(tableID) {
    deleteTable();
    var checkElement = document.getElementById('first');
    document.getElementById('first').innerHTML = "";
    var x1 = document.getElementById('x1').value;
    var x2 = parseInt(document.getElementById('x2').value);
    var y1 = parseInt(document.getElementById('y1').value);
    var y2 = parseInt(document.getElementById('y2').value);
    // Replace the content of that element with the personalized welcome message
    checkElement.textContent = "";
    let hasError = false;
    let  error = "";
    let invalid_x = "";
    let invalid_y = "";
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

    if (x2 >= x1 && y2 >= y1) {
      this.getTableData(x1,x2,y1,y2, tableID);
    } else if (x2 < x1 && y2 > y1) {
      this.getTableData(x2,x1,y1,y2, tableID);
    } else if (x2 < x1 && y2 < y1) {
      this.getTableData(x2,x1,y2,y1, tableID);
    } else if (x2 > x1 && y2 < y1) {
      this.getTableData(x1,x2,y2,y1, tableID);
    }
}


function deleteTable() {
  var checkElement = document.getElementById('first');
  checkElement.textContent = "";
  var checkElement2 = document.getElementById('check');
  checkElement2.textContent = "";
  document.getElementById('invalid_x').innerHTML = "";
  document.getElementById('invalid_y').innerHTML = "";
  var myTable = document.getElementById("myTable");
  var rowCount = myTable.rows.length;
  for (var x=rowCount-1; x>=0; x--) {
     myTable.deleteRow(x);
   }
}
