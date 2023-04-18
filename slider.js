const slides = document.querySelectorAll('.Slide');
const dots = document.querySelectorAll(".Navdot");
// console.log(slides);
var slideIndex = 0;

function currentSlide(n){
    slideIndex = slideIndex + n
    showSlides(slideIndex);   

}

function navLocation(n){
    showSlides(slideIndex = n-1)
}

showSlides(0);

function showSlides(n) {
    // var dots = document.getElementsByClassName("Navdot");
    slides.forEach((slide)=>{
        slide.style.display = " none";
    });

    dots.forEach(
        item => {item.className = item.className.replace(" selected", "")}
    );
//if n gets ecceeded than length then bring it to starting index
    if(n== slides.length){
        slideIndex = 0;
        n=0;
    }

//if n gets less than 0 then bring it to last index    
    if(n<0){
        slideIndex = slides.length -1;
        n= slides.length -1;;
    }

    slides[n].style.display = 'block';
    dots[n].className += " selected";
    
}