$(Document).ready(function () {
  $(document).scroll(function () {
    let st = $(this).scrollTop();
    if (st > 160) {
      $("div#divscroll").addClass("show");
      console.log(st);
    } else {
      $("div#divscroll").removeClass("show");
    }
  });
});

let sabtenam = document.getElementById("sabtenam");
let sabtenam2 = document.getElementById("sabtenam2");
let btn = document.getElementById("close");
let btn1 = document.getElementById("close1");

sabtenam.addEventListener("click", function () {
  sabtenam2.classList.remove("remove");
});

btn.addEventListener("click", function () {
  sabtenam2.classList.add("remove");
});
btn1.addEventListener("click", function () {
  sabtenam2.classList.add("remove");
});
// end sabtenam

// start dropdownmenu

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
  if (!event.target.matches(".dropbtn1")) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
  if (!event.target.matches(".dropbtn2")) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// start taeen vasile hamlonaghl
let hover = document.querySelectorAll("div.box1 > ul > li");
hover.forEach((elem) => {
  elem.addEventListener("click", function () {
    removeactive();
    removeactive1();
    elem.classList.add("hoverblue");
    elem.classList.remove("hoverbluedark");
  });
});
function removeactive() {
  hover.forEach((elem) => {
    elem.classList.remove("hoverblue");
  });
}

// start dark mode
let hoverdark = document.querySelectorAll("div.hoverbluedark");

hoverdark.forEach((elem) => {
  elem.addEventListener("click", function () {
    removeactive();
    removeactive1();
    elem.classList.add("hoverbluedark");
    elem.classList.remove("hoverblue");
  });
});
function removeactive1() {
  hoverdark.forEach((elem) => {
    elem.classList.remove("hoverbluedark");
  });
}
// end dark mode
// end taeen vasile hamlonaghl

// start mosafer

let mosaferbtn = document.getElementById("mosafer1");
let mosafer = document.getElementById("focus");

mosaferbtn.addEventListener("click", function () {
  mosafer.classList.toggle("focusactive");
});
let pluss = document.getElementById("plus");
let adad = document.getElementById("adad");
let menha = document.getElementById("menha");

let pluss1 = document.getElementById("plus1");
let adad1 = document.getElementById("adad1");
let menha1 = document.getElementById("menha1");

let pluss2 = document.getElementById("plus2");
let adad2 = document.getElementById("adad2");
let menha2 = document.getElementById("menha2");
let asli = document.getElementById("asli");

let number = 1;
let number1 = 0;
let number2 = 0;

pluss.addEventListener("click", function () {
  if(number<6){
  adad.innerHTML = ++number;
  asli.innerHTML = number + number1 + number2 + "مسافر";
  console.log(number);
}});
menha.addEventListener("click", function () {
  if(number>1){
  adad.innerHTML = --number;
  asli.innerHTML = number + number1 + number2 + "مسافر";
  }
});

pluss1.addEventListener("click", function () {
  if(number1<4){
  adad1.innerHTML = ++number1;
  asli.innerHTML = number1 + number + number2 + "مسافر";
  console.log(number1);
  }
});
menha1.addEventListener("click", function () {
  if (number1>0){
  adad1.innerHTML = --number1;
  asli.innerHTML = number1 + number + number2 + "مسافر";
  }
});

pluss2.addEventListener("click", function () {
  if(number2<2){
  adad2.innerHTML = ++number2;
  asli.innerHTML = number2 + number + number1 + "مسافر";
  console.log(number2);
  }
});
menha2.addEventListener("click", function () {
  if (number2 > 0) {
    adad2.innerHTML = --number2;
    asli.innerHTML = number2 + number + number1 + "مسافر";
  }
});

// start slider
var slideIndex = 0;
function showSlide() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var i;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
  slideIndex++;
  setTimeout(showSlide, 4000);
}
showSlide();
// end slider
// start acardeon
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
var acc = document.getElementsByClassName("accordion10");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// phone
var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// end phone
// bishtar
var acc = document.getElementsByClassName("accordionbishtar");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// end bishtar

// dark mode
document
  .getElementById("toggle-example")
  .addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
