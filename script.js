function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector(".btn");
  const image = document.querySelector(".image-container69 img");
  
  button.addEventListener("click", function() {
    alert("You clicked the button!");
  });
  
  image.addEventListener("mouseenter", function() {
    this.style.filter = "grayscale(100%)";
  });
  
  image.addEventListener("mouseleave", function() {
    this.style.filter = "none";
  });
});
