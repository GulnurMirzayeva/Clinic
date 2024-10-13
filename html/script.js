window.onload = function () {
  var numberElements = document.querySelectorAll(".number");
  var finalNumbers = [150, 857, 3234];
  var duration = 0;

  for (var i = 0; i < numberElements.length; i++) {
    animateNumber(numberElements[i], finalNumbers[i], duration);
  }
};

function animateNumber(element, finalNumber, duration) {
  var interval = duration / finalNumber;
  var currentNumber = 0;

  var timer = setInterval(function () {
    currentNumber++;
    element.textContent = currentNumber;
    if (currentNumber === finalNumber) {
      clearInterval(timer);
    }
  }, interval);
}

const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for (let i = 0; i < indicatorImages.length; i++) {
  indicatorImages[i].addEventListener("click", function () {
    for (let j = 0; j < indicatorImages.length; j++) {
      indicatorImages[j].classList.remove("active");
    }
    this.classList.add("active");
    const id = this.getAttribute("data-id");
    for (let j = 0; j < slides.length; j++) {
      slides[j].classList.remove("active");
    }
    slides[id].classList.add("active");

  })
}



