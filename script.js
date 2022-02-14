const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberimages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// Set up the slider
function init() {
  /*  
    slideImage[0] = 0     first item
    slideImage[1] = 100%   second ...
    slideImage[2] = 200%    ......
    */

  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");
  createNavigationDots();
}
init();


// Create navigation dots
function createNavigationDots() {
  for (let i = 0; i < numberimages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  navigationDots.children[0].classList.add("active");
}

// Next Btn
nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberimages - 1) {
    goToSlide(0);
    return;
  }

  currentSlide++;
  goToSlide(currentSlide);
});

// Previous Btn
prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberimages - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
});

// Go To Slide
function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}

// Set Active Class
function setActiveClass() {

  // Set active class for Slide Image
  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  //   set active class for navigation dots
  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}


//Loading Number
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / speed;

    // console.log(inc);
    // console.log(count);

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = count + inc;
      // Call function every ms
      setTimeout(updateCount, 15);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});



window.onload = function () {
  const test = document.querySelector(".section-one");

  window.addEventListener('scroll', scrolltest);


  function scrolltest() {
    if (window.scrollY >= 200) {
      test.style.opacity = '0';
      test.style.transform = 'translateX(200px)';
      test.style.transition = '1s ease-in-out';
    }
    else {
      test.style.opacity = '1';
      test.style.transform = 'translateX(0px)';
    }
  }
  scrolltest();
}




//Scroll To Top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
