var divBox= document.getElementById("box-coders");
var creandoDocumFragment = document.createDocumentFragment();
var nombresCoders = ["Milagros Gutierrez","Nakarid Jave",
"Maricarmen Rojas","Ariana Cabana","Flor Condori","Mitch Rodríguez"];

window.addEventListener ("load",function() {
  for (var i = 1; i <= nombresCoders.length ; i++) {
    var span = document.createElement("span");
    var img = document.createElement("img");
    var divCadaCoder = document.createElement("div");
    var nombreCoder = document.createTextNode(nombresCoders[i-1]);

    img.setAttribute("src","img/"+i+".png");
    img.setAttribute("class","foto-coders");
    divCadaCoder.setAttribute("class","cada-coder");

    span.appendChild(nombreCoder);
    divCadaCoder.appendChild(img);
    divCadaCoder.appendChild(span);
    creandoDocumFragment.appendChild(divCadaCoder);
    divBox.appendChild(creandoDocumFragment);
  }
})
