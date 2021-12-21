document.getElementById("logo").addEventListener("mouseover", mouseOver);
document.getElementById("logo").addEventListener("mouseout", mouseOut);


function mouseOver() {
  document.getElementById("background-video").style.filter = "blur(1px)";
  document.getElementById("background-video").style.transition = "4s";
}

function mouseOut() {
  document.getElementById("background-video").style.filter = "blur(4px)";
    document.getElementById("background-video").style.transition = "1s";
}
