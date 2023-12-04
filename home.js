var mainDiv = document.getElementById("main");

var l1 = document.createElement("label");
l1.innerText = "Name :";

var l2 = document.createElement("label");
l2.innerText = "City :";

var l3 = document.createElement("label");
l3.innerText = "Mobile";

var t1 = document.createElement("input");

var t2 = document.createElement("input"); 

var t3 = document.createElement("input");

var br1 = document.createElement("br")

var br2 = document.createElement("br")

var br3 = document.createElement("br");


var b1 = document.createElement("button");
b1.innerText = "Submit"

var b2 = document.createElement("button");
b2.innerText = "Cancel"

var b3 = document.createElement("button");
b3.innerText = "Clear"

mainDiv.appendChild(l1);
mainDiv.appendChild(t1);
mainDiv.appendChild(br1)
mainDiv.appendChild(l2);
mainDiv.appendChild(t2);
mainDiv.appendChild(br2);
mainDiv.appendChild(l3);
mainDiv.appendChild(t3);
mainDiv.appendChild(br3);
mainDiv.appendChild(b1);
mainDiv.appendChild(b2);

var mainDiv2 = document.getElementById("main2");
var clone = mainDiv.cloneNode(true)
var clone2 = mainDiv.cloneNode(true)

mainDiv2.appendChild(clone);
mainDiv2.appendChild(clone2)

mainDiv.appendChild(b3)
var clone3 = mainDiv.cloneNode(true);
mainDiv2.appendChild(clone3);



