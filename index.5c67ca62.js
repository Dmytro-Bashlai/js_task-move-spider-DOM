var t=document.querySelector(".wall"),e=document.querySelector(".spider");t.addEventListener("click",function(l){if(l.target.matches(".wall")){var a=Math.min(Math.max(l.x-t.offsetLeft-t.clientLeft-e.clientWidth/2,0),350),i=Math.min(Math.max(l.y-t.offsetTop-t.clientLeft-e.clientHeight/2,0),350);e.style.left=a+"px",e.style.top=i+"px"}});
//# sourceMappingURL=index.5c67ca62.js.map
