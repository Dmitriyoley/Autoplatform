var wholeHeader=document.getElementById("header"),burgerButton=document.getElementById("tabletBurger"),tabletHeader=document.getElementById("tablet");window.addEventListener("click",(function(e){wholeHeader.contains(e.target)||"opened"!==tabletHeader.getAttribute("data-header")||(tabletHeader.setAttribute("data-header","closed"),document.body.style.overflow="scroll",tabletHeader.style.height="96px",document.querySelectorAll("section").forEach((function(e){e.style.removeProperty("filter")})),pageYOffset/100<1?wholeHeader.style.backgroundColor="rgba(28, 37, 44, ".concat(pageYOffset/100,")"):wholeHeader.style.backgroundColor="rgba(28, 37, 44, 1)")})),burgerButton.addEventListener("click",(function(){"closed"===tabletHeader.getAttribute("data-header")?(tabletHeader.setAttribute("data-header","opened"),document.body.style.overflow="hidden",tabletHeader.style.height="192px",wholeHeader.style.backgroundColor="#1b242b",document.querySelectorAll("section").forEach((function(e){e.style.filter="brightness(0.4)"}))):(tabletHeader.setAttribute("data-header","closed"),document.body.style.overflow="scroll",tabletHeader.style.height="96px",document.querySelectorAll("section").forEach((function(e){e.style.removeProperty("filter")})),pageYOffset/100<1?wholeHeader.style.backgroundColor="rgba(28, 37, 44, ".concat(pageYOffset/100,")"):wholeHeader.style.backgroundColor="rgba(28, 37, 44, 1)")}));
//# sourceMappingURL=index.bd7d9c1e.js.map