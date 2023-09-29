// creating an element and assighn it to a variable
const h2 = document.createElement("h2)");
h2.textContent = "this content is added by javaScript";
// insert the element (h2) into the html dom. select body and append(change) to the child (lower branch)
document.querySelector("body").appendChild(h2);