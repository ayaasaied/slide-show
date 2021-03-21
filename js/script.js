/* Slideshow JavaScript */
var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
chickershowSlides(slideIndex);

function plusSlides(n) {
    chickershowSlides(slideIndex += n);
}

function currentSlide(n) {
    chickershowSlides(slideIndex = n);
}

function chickershowSlides(n) {
  var i;
  
  if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");

    //dont useful because there are function onclick in html 
//   plusSlides =slideIndex +=n;
//   currentSlide = slideIndex = n;

}