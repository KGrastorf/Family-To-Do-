// your code goes here ...


//Append attributes to the HTML and invoke function on submit
document.getElementsByTagName("form")[0].setAttribute("name", "hhForm");
document.getElementsByTagName("form")[0].setAttribute("enctype", "application/json");

//Select age and relative inputs to check if value is left empty. If so, alert user that they need to imput information.

const age = document.forms["hhForm"]["age"].value;
const rel = document.forms["hhForm"]["rel"].value;
const smoker = document.forms["hhForm"]["smoker"].checked;

var family = new Object();
family.age = age;
family.relation = rel;
family.smoker = smoker;


/*   ======== Making the family list ======== */


//Creating a "Remove" link
const myFamList = document.getElementsByTagName("li");
var i;
for(i = 0; i < myFamList.length; i++)
 {
   var span = document.createElement("span");
   var text = document.createTextNode("Remove");
   span.className = "close";
   span.appendChild(text);
   myFamList[i].appendChild(span);
 }

//Creating "Remove" functionality
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var famMem= this.parentElement;
    famMem.removeChild(myFamList.childNodes[i]);
  }
}


//Adding Family members
var info1 = document.getElementsByTagName("input")[0].setAttribute("id", "info1");
var info2 = document.getElementsByTagName("input")[1].setAttribute("id", "info2");
var submit = document.querySelectorAll("button")[0].setAttribute("onclick", "addFamily(); return false;");



function addFamily() {


 /* ======== Validating Inputs    ========  */

  var li = document.createElement("li");
  var ageValue = document.getElementById("info1").value;
  var smokerValue = document.getElementById("info2").checked;
  var relValue = document.querySelectorAll("select")[0].value;
  var space1 = document.createTextNode("   ");
  var space2 = document.createTextNode("   ");
  var e = document.createTextNode(ageValue);
  var f = document.createTextNode(relValue);
  var g = document.createTextNode(smokerValue);

  if(ageValue == "" || relValue == "") {
    alert("Both age and relationship are required.");
    return false;
  } else {

/* ======== Creating Family List    ========  */
  li.appendChild(e);
  li.appendChild(space1);
  li.appendChild(f);
  li.appendChild(space2);
  li.appendChild(g);
  document.querySelectorAll("ol")[0].appendChild(li);
  age;
  rel;
  smoker;
  var span = document.createElement("span");
  var txt = document.createTextNode("  \u00D7  ");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}

}



















//
