//-----------------------------//
// --- Botao TOPO --- //
//-----------------------------//
var botaoTopo = document.getElementById("topo-btn")
var body = document.body,
    docElem = document.documentElement;

var offset = 100, docHeight, scrollPos;

//Calc Altura + Offset
docHeight = Math.max( body.scrollHeight, body.offsetHeight,
              docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight );
if(docHeight != 'undefined'){
  offset = docHeight / 4;
}

// Scroll Listener
window.addEventListener("scroll", function(event){
  scrollPos = body.scrollTop || docElem.scrollTop;

  if(scrollPos > offset){
    botaoTopo.className = "visible";
  } else{
    botaoTopo.className = "";
  }
})
