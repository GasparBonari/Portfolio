$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}	
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();


/******************************************************************************************************************************
Typing animation
*******************************************************************************************************************************/

let point = document.querySelector(".about-p");

function typing(entries)
{
  let [entry] = entries;

  if(!entry.isIntersecting) return;

  document.querySelector("h4").classList.remove("hidden");

}

let typeInteration = new IntersectionObserver(typing,
{
  root: null,
  threshold: 0.2
})

typeInteration.observe(point);


/******************************************************************************************************************************
Slider
*******************************************************************************************************************************/

let slides = document.querySelectorAll(".slide");
let btnSlideLeft = document.querySelector(".slider__btn--left");
let btnSlideRight = document.querySelector(".slider__btn--right");

let currentSlide = 0;
let maxSlide = slides.length;

function goToSlide(slide)
{
	slides.forEach((e, i) => 
	{
		e.style.transform = `translateX(${50 * (i - slide)}%)`;
	})
}

goToSlide(0);

function slideToRight()
{
  if(maxSlide - 1 == currentSlide)
  {
    currentSlide = 0; // goes back to the first one
  }
  else
  {
    currentSlide++;
  }

  goToSlide(currentSlide);
}

function slideToLeft()
{
  if(currentSlide == 0)
  {
    currentSlide = maxSlide - 1; // goes to the last one
  }
  else
  {
    currentSlide--;
  }

  goToSlide(currentSlide);
}

btnSlideRight.addEventListener("click", slideToRight);
btnSlideLeft.addEventListener("click", slideToLeft);

document.addEventListener("keydown", function(e)
{
  if(e.key == "ArrowRight")
  {
    slideToRight();
  }
})

document.addEventListener("keydown", function(e)
{
  if(e.key == "ArrowLeft")
  {
    slideToLeft();
  }
})
