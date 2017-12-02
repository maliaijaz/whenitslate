(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// Change background color every few seconds

const cats = [
	"img/Aubergine.jpg",
	"img/CosmicFusion.jpg",
	"img/PinkFlavour.jpg",
	"img/AubergineRotated.jpg"
]

const node = document.getElementById("full");

const cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
    setTimeout(() => {
        container.style.background = `url(${image})`  
    }, step * (index + 1))
  ))
  setTimeout(() => cycleImages(images, container, step), step * images.length)
}

cycleImages(cats, node, 1000)


// var doc = document.getElementById("full");
// doc.style.background = "url('../img/CosmicFusion.jpg')";

// document.getElementById("full").style.backgroundImage = "https://c1.staticflickr.com/5/4579/38461604752_116abec55f_b.jpg";



// $(document).ready(function(){
//     var i = 0;
// function change() {
//   var doc = document.getElementById("full");
//   var color = ["black", "blue", "brown", "green"];
//   doc.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
// }
// setInterval(change, 1000);
//   });