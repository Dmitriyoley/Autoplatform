window.addEventListener("scroll",(function(){var e=document.getElementById("header");pageYOffset/100<1?e.style.backgroundColor="rgba(28, 37, 44, ".concat(pageYOffset/100,")"):e.style.backgroundColor="rgba(28, 37, 44, 1)"})),window.addEventListener("visibilitychange",(function(){})),function(){var e,t=document.querySelector(".hero__container"),n=document.querySelector(".button__left"),i=document.querySelector(".button__right"),l=document.querySelector(".hero__slides"),o=document.querySelectorAll(".hero__slide"),a=1,r=o[0].cloneNode(!0),s=o[o.length-1].cloneNode(!0);r.id="first-clone",s.id="last-clone",l.append(r),l.prepend(s);var c=o[a].clientWidth;l.style.transform="translateX(".concat(-c*a,"px)");var d=function(){e=setInterval((function(){y()}),5e3)},u=function(){return document.querySelectorAll(".hero__slide")};l.addEventListener("transitionend",(function(){o=u(),0===a?document.getElementById("pagination5").style=!0:6===a?document.getElementById("pagination1").checked=!0:0!==a&&(document.getElementById("pagination".concat(a)).checked=!0),o[a].id===r.id&&(l.style.transition="none",a=1,l.style.transform="translateX(".concat(-c*a,"px)")),o[a].id===s.id&&(l.style.transition="none",a=o.length-2,l.style.transform="translateX(".concat(-c*a,"px)"))}));var y=function(){o=u(),a>=o.length-1||(a++,l.style.transition=".7s ease-out",l.style.transform="translateX(".concat(-c*a,"px)"))};t.addEventListener("mouseenter",(function(){clearInterval(e)})),t.addEventListener("mouseleave",d),i.addEventListener("click",(function(){y(),clearInterval(e)})),n.addEventListener("click",(function(){a<=0||(a--,l.style.transition=".7s ease-out",l.style.transform="translateX(".concat(-c*a,"px)")),clearInterval(e)})),window.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState?d():clearInterval(e)})),d()}(),function(){document.getElementById("brandsGallery");for(var e=document.getElementById("brandsSlide").getElementsByClassName("brands__logo"),t=document.getElementsByClassName("brands__logo")[0].offsetWidth,n=0;n<e.length;n++)e[n].style.left=n*t+"px";!function n(){var i=setInterval((function(){for(var n=0;n<e.length;n++){var i=parseInt(e[n].style.left),l=i<0;e[n].style.left=i-t+"px",l?(e[n].style.visibility="hidden",e[n].style.left=(e.length-2)*t+"px"):"visible"!==e[n].style.visibility&&(e[n].style.visibility="visible")}}),3e3);window.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState?n():clearInterval(i)}))}()}();
//# sourceMappingURL=index.0c2a81c1.js.map
