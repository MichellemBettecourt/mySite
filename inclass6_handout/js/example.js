// ADD NEW ITEM TO END OF LIST

//var ul = document.getElementById("list");
var ul = document.getElementsByTagName("ul")[0];
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("cream"));
  li.setAttribute("id", "five"); // added line
  ul.appendChild(li);


// ADD NEW ITEM START OF LIST
var li2 = document.createElement("li");
li2.appendChild(document.createTextNode("kale"));
li2.setAttribute("id", "zero"); // added line
ul.insertBefore(li2, ul.childNodes[0]);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var items = ul.getElementsByTagName("li");
var length = items.length;
for (var i = 0; i < items.length; ++i) {
  items[i].classList.add("mystyle");
  items[i].setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var span = document.createElement("span");
span.appendChild(document.createTextNode(length));
var h2 = document.getElementsByTagName("h2")[0];
h2.appendChild(span);
