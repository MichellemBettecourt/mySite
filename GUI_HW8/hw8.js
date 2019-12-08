//
// Homework 8: Multiplication table generator using Embedding javascript AND JQUERY
// now with sliders and tabs
// File: https://michellembettecourt.github.io/mySite/GUI_HW8/hw8.html
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
// Updated by MMB on December 12, 2019

var tableGeneratedOnce = false;
var tabCount = 0;
var noErrors = true;
//setting the variables initially
$("#input_form_x_axis_1").val(-5).addClass("valid");
$("#input_form_x_axis_2").val(8).addClass("valid");
$("#input_form_y_axis_1").val(3).addClass("valid");
$("#input_form_y_axis_2").val(-7).addClass("valid");
// generated the table on the right side that stays put the whole time
this.onClickMult( "current-table");
$("#deleteSelected").hide();


//***************************************************************
// This function is pretty self explanitory
//- First I delete some text that is not irrelivant
//- Then I loop through the table and delete all the row
//***************************************************************
function deleteTable(clear_inputs, tableID) {
  var checkElement = document.getElementById('first');
  checkElement.textContent = "";
  var checkElement2 = document.getElementById('check');
  checkElement2.textContent = "";
  // document.getElementById('invalid_x').innerHTML = "";
  // document.getElementById('invalid_y').innerHTML = "";
  var myTable = document.getElementById(tableID);
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
    if (tableID == "current-table")
      deleteTable(false, tableID);
    else showDeleteAllButton();
    // Then it reads in the all the varibles from the input boxes
    var x1 = document.getElementById('input_form_x_axis_1').value;
    var x2 = document.getElementById('input_form_x_axis_2').value;
    var y1 = document.getElementById('input_form_y_axis_1').value;
    var y2 = document.getElementById('input_form_y_axis_2').value;
    // Replace the content of that element with the personalized welcome message
    let hasError = false;
    let  error = "";
    y1 = parseInt(y1);
    y2 = parseInt(y2);
    x1 = parseInt(x1);
    x2 = parseInt(x2);
    let tooBig = false;
    document.getElementById('tooBigMessageX').innerHTML = "";
    document.getElementById('tooBigMessageY').innerHTML = "";
    document.getElementById('tooBigMessage').innerHTML = "";
    document.getElementById('tooBigMessageX').style.display="none";
    document.getElementById('tooBigMessageY').style.display="none";
    document.getElementById('tooBigMessage').style.display="none";
    // setting range varibales
    let xRange = Math.abs(x1 - x2);
    let yRange = Math.abs(y1 - y2);
    // since my program can handle the 200 range pretty well I decided to bump up the limit
    // if its too large say something and set the tooBig variable
    if (yRange > 200) {
        document.getElementById('tooBigMessageX').innerHTML = "The y range is too large! The range is " + yRange + ". <br>";
        document.getElementById("tooBigMessageX").style.display="block";
        tooBig = true;
      }
    if (xRange > 200) {
        document.getElementById('tooBigMessageY').innerHTML = "The x range is too large! The range is " + xRange + ". <br> ";
        document.getElementById("tooBigMessageY").style.display="block";
        tooBig = true;
      }
    //Only if the range is small enough we will generate the table
    if (!tooBig) {
      if (tableID != "current-table") {
        tabCount++;
        tableID = "table_id_" + tabCount;
        tableID_div = "" + tableID + "_div";
        tableID_button = "#" + tableID + "_button";
        tableID_button2 = tableID + "_button";
        var txt4 = "<div class=\"tabcontent\" id=\"" + tableID_div  + "\" ><table id=\"" + tableID + "\"></table></div>"
        var button = "<button id=\"" + tableID_button  + "\" onclick=\"openCity(event,'" + tableID_div + "')\" class='tablinks'> Table " + tabCount +  "<" + "/button>"
        + "<button style=\"padding: 4px 0px 14px 0; margin-left: -27px; background-color: transparent;\" class=\"close-button\"onclick=\"closeButtons('" + tableID_button2 + "','" + tableID_div + "')\" ><span class=\"close\">&times;</span><" + "/button>"
        + "<input  id=\"" + tableID  + "_checkbox\" style=\"margin-top: 28px;margin-left: -17px; float: left;\" type=\"checkbox\">";
        $('#table_id_1_button').attr('onClick', 'openCity(event,"table_id_1_div")');
        var txt1 = "<div id='" + tableID + "_div'" +  " class='tabcontent'><table id='" + tableID + "'></table></div>"
        $("#tab").after(txt4);
        $("#tab").append(button);
      }
      // Finally we order the numbers in assending order
      //To do this I compare all the numbers and it to getTableData accordingly
      if (x2 >= x1 && y2 >= y1) {
        this.getTableData(x1,x2,y1,y2, tableID);
      } else if (x2 <= x1 && y2 >= y1) {
        this.getTableData(x2,x1,y1,y2, tableID);
      } else if (x2 <= x1 && y2 <= y1) {
        this.getTableData(x2,x1,y2,y1, tableID);
      } else if (x2 >= x1 && y2 <= y1) {
        this.getTableData(x1,x2,y2,y1, tableID);
      }
    }
    else {
      document.getElementById('tooBigMessage').innerHTML = "Why not break it up some? Please enter a range smaller than 200";
        document.getElementById("tooBigMessageX").style.display="block";
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
    checkElement.textContent = "";
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
    if (tableID != "current-table") {
      document.getElementById("#" + tableID + "_button").click();
    }
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

//***************************************************************
// This function is attached to each tab button
// I got it off of w3 schools
// It reads the name, and opens up the specified conented attached to that tab
//***************************************************************

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//***************************************************************
// This function is attached to each x button
// When the user clicked x we will delete the tab button and the content
//***************************************************************

function closeButtons(input, input2) {
    var buttonToBeDeleted2 = document.getElementById(input2);
    var buttonToBeDeleted = document.getElementById("#" + input);
    buttonToBeDeleted2.style.display = 'none';
    buttonToBeDeleted.style.display = 'none';
}

//***************************************************************
// This function is attached the "delete selected" buttons
// it first finds all the elements of type input
// Then the check box and if its checked or not.
// If it is checked then it again deleted the button and content
//***************************************************************

function deleteAllSelected() {
    var closebtns = document.getElementsByTagName("input");
    var i;
    for (i = 0; i < closebtns.length; i++) {
      if(closebtns[i].type == "checkbox" && closebtns[i].checked == true) {
        var button_string = closebtns[i].id.replace("_checkbox", "_button");
        var div_string = closebtns[i].id.replace("_checkbox", "_div");
        var buttonToBeDeleted2 = document.getElementById("#" + button_string);
        var buttonToBeDeleted = document.getElementById(div_string);
        buttonToBeDeleted2.style.display = 'none';
        buttonToBeDeleted.style.display = 'none';

        var x = "testing";
      }
    };
}

//***************************************************************
// Small function to only show the delete button when the
// first mult tab is generated
//***************************************************************

function showDeleteAllButton() {
  $("#deleteSelected").show();
}

// https://formden.com/blog/validate-contact-form-jquery
//These next 4 functions are for each input value
$(document).ready(function() {
  //These are generated sliders
  //they are pretty self explaintory at the top
  // they have a min, max and initial value
  var handle = $( "#custom-handle" );
  $("#slider").slider({
    min: -10,
    max: 10,
    value: -5,
    create: function() {
      // adds the text to the handle
      handle.text( $( this ).slider( "value" ) );
      // triggers the input box to have the same number
      $("#input_form_x_axis_1").trigger("input");
    },
    slide: function( event, ui ) {
      // Same thing everything it slides
      handle.text( ui.value );
      $("#input_form_x_axis_1").val(ui.value);
      $("#input_form_x_axis_1").trigger("input");
      onClickMult("current-table");
    }
  });
  var handle2 = $( "#custom-handle2" );
  $("#slider2").slider({
    min: -10,
    max: 10,
    value: 8,
    create: function() {
      handle2.text( $( this ).slider( "value" ) );
      $("#input_form_x_axis_2").trigger("input");
    },
    slide: function( event, ui ) {
      handle2.text( ui.value );
      $("#input_form_x_axis_2").val(ui.value);
      $("#input_form_x_axis_2").trigger("input");
      onClickMult("current-table");
    }
  });
  var handle3 = $( "#custom-handle3" );
  $("#slider3").slider({
    min: -10,
    max: 10,
    value: 3,
    create: function() {
      handle3.text( $( this ).slider( "value" ) );
      $("#input_form_y_axis_1").trigger("input");
    },
    slide: function( event, ui ) {
      handle3.text( ui.value );
      $("#input_form_y_axis_1").val(ui.value);
      $("#input_form_y_axis_1").trigger("input");
      onClickMult("current-table");
    }
  });
  var handle4 = $( "#custom-handle4" );
  $("#slider4").slider({
    min: -10,
    max: 10,
    value: -7,
    create: function() {
      handle4.text( $( this ).slider( "value" ) );
      $("#input_form_y_axis_2").trigger("input");
    },
    slide: function( event, ui ) {
      handle4.text( ui.value );
      $("#input_form_y_axis_2").val(ui.value);
      $("#input_form_y_axis_2").trigger("input");
      onClickMult("current-table");
    }
  });
  <!-- Real-time Validation -->
    <!--input must be an integer -->
    $('#input_form_x_axis_1').on('input', function() {
      //takes in the input and gets the error2 to element
      var input=$(this);
      var error_element=$("p", input.parent());
        var in_range = true;
      //if the "floor" doesnt match the actual input than it's wrong
      var is_number=Number.isInteger(input.val());
      var is_number = (Math.floor(input.val()) == input.val() && $.isNumeric(input.val()));
      //When the user inputs the wrong thing out of range it will be alerted
      if (input.val() > 10 || input.val() < -10) in_range = false
      else {
      $("#slider1").slider("option", "value", parseInt(input.val()));
      $("#custom-handle1").text(parseInt(input.val()));
      }
      //if its wrong give it a red margin and show the p element
      if(is_number && in_range){
        input.removeClass("invalid").addClass("valid");
        error_element.removeClass("error_show").addClass("error2");
        $("#X1Error").hide();
      } else {
        input.removeClass("valid").addClass("invalid");
        if (!is_number)
            error_element.removeClass("error2").addClass("error_show");
        if (!in_range) {
          //out of range error message
            $("#X1Error").show();
            error_element2.removeClass("error3").addClass("error_show");
          }
      }
    });

    $('#input_form_x_axis_2').on('input', function() {
      //takes in the input and gets the error2 to element
      var input=$(this);
      var error_element=$("p", input.parent());
        var in_range = true;
      //if the "floor" doesnt match the actual input than it's wrong
      var is_number=Number.isInteger(input.val());
      var is_number = (Math.floor(input.val()) == input.val() && $.isNumeric(input.val()));

      if (input.val() > 10 || input.val() < -10) in_range = false;
      else {
      $("#slider2").slider("option", "value", parseInt(input.val()));
      $("#custom-handle2").text(parseInt(input.val()));
      }

      //if its wrong give it a red margin and show the p element
      if(is_number && in_range){
        input.removeClass("invalid").addClass("valid");
        error_element.removeClass("error_show").addClass("error2");
        $("#X2Error").hide();
      } else {
        input.removeClass("valid").addClass("invalid");
        if (!is_number)
            error_element.removeClass("error2").addClass("error_show");
        if (!in_range) {
            $("#X2Error").show();
            error_element2.removeClass("error3").addClass("error_show");
          }
      }
    });

    $('#input_form_y_axis_2').on('input' || 'change', function() {
      //takes in the input and gets the error2 to element
      var input=$(this);
      var error_element=$("p", input.parent());
      var error_element2=$("a", input.parent());
      var in_range = true;
      //if the "floor" doesnt match the actual input than it's wrong
      var is_number=Number.isInteger(input.val());
      var is_number = (Math.floor(input.val()) == input.val() && $.isNumeric(input.val()));

      if (input.val() > 10 || input.val() < -10) in_range = false
      else {
      $("#slider4").slider("option", "value", parseInt(input.val()));
      $("#custom-handle4").text(parseInt(input.val()));
      }

      //if its wrong give it a red margin and show the p element
      if(is_number && in_range){
        input.removeClass("invalid").addClass("valid");
        error_element.removeClass("error_show").addClass("error2");
        $("#Y2Error").hide();
      } else {
        input.removeClass("valid").addClass("invalid");
        if (!is_number)
            error_element.removeClass("error2").addClass("error_show");
        if (!in_range) {
            $("#Y2Error").show();
            error_element2.removeClass("error3").addClass("error_show");
          }
      }
    });

    $('#input_form_y_axis_1').on('input', function() {
      //takes in the input and gets the error2 to element
      var input=$(this);
      var error_element=$("p", input.parent());
      var in_range = true;
      //if the "floor" doesnt match the actual input than it's wrong
      var is_number=Number.isInteger(input.val());
      var is_number = (Math.floor(input.val()) == input.val() && $.isNumeric(input.val()));

      if (input.val() > 10 || input.val() < -10) in_range = false
      else {
      $("#slider3").slider("option", "value", parseInt(input.val()));
      $("#custom-handle3").text(parseInt(input.val()));
      }
      //if its wrong give it a red margin and show the p element
      if(is_number && in_range){
        input.removeClass("invalid").addClass("valid");
        error_element.removeClass("error_show").addClass("error2");
        $("#Y1Error").hide();
      } else {
        input.removeClass("valid").addClass("invalid");
        if (!is_number)
            error_element.removeClass("error2").addClass("error_show");
        if (!in_range) {
            $("#Y1Error").show();
            error_element2.removeClass("error3").addClass("error_show");
          }
      }
    });

  <!-- After Form Submitted Validation-->
  $("#input_form_submit button").click(function(event){
    var form_data=$("#input_form").serializeArray();
    var error_free=true;
    //When the user clicks multiply we check every element
    //if its wrong from earlier OR empty, tell the user using the DIV element
    for (var input in form_data){
      var element=$("#input_form_"+form_data[input]['name']);
      var valid=element.hasClass("valid");
      var error_element=$("div", element.parent());
      if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
      else{error_element.removeClass("error_show").addClass("error");}
    }
    //do not remove input values because I am using them later in the functions
      event.preventDefault();
    //if there is no errors, fire off the function
      if (error_free) onClickMult('myTable');

  });
});
