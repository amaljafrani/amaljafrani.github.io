// HOME PAGE START

window.onload = function(){
  var timer = setTimeout("type()", 0)
  }

  var a= 0;
  var b = 0;
  var intro = "Hello, I'm"
  var intro1 = "AMAL."
  let timer = 215;

  function type() {
      if (a < intro.length) {
          document.getElementById("intro").innerHTML += intro.charAt(a);
          a++;
          setTimeout(type, timer);
      }
      
      else if (b < intro1.length) {
          document.getElementById("intro_1").innerHTML += intro1.charAt(b);
          b++;
          setTimeout(type, timer);
      }

  }


function fabHover() {
    var img = document.getElementById("home-image");
    var img1 = document.getElementById("home-image1");
    img.src="assets/images/about/light.jpg";
    img1.src="assets/images/about/lg.jpg";
    img.alt="image of a lamp I fabricated with wood and acrylic";
    img1.alt="image of a dress I sewed";
    img.style.opacity=1;
    img1.style.opacity=1;
    img.style.transform = "rotate(10deg)";
    img1.style.transform = "rotate(15deg)";
    img.style.width = "55%";
    img1.style.width = "55%";
    img.style.height = "auto";
    img1.style.height = "auto";
  }

function fabLeave() {
    var img = document.getElementById("home-image");
    var img1 = document.getElementById("home-image1");
    img.src="assets/images/about/white.png";
    img1.src="assets/images/about/white.png";
    img.style.opacity=0;
    img1.style.opacity=0;
    img.style.transform = "rotate(0deg)";
    img1.style.transform = "rotate(0deg)";
  }

function vectorHover() {
    var img2 = document.getElementById("home-image");
    var img3 = document.getElementById("home-image1");
    img2.src="assets/images/about/time.png";
    img3.src="assets/images/about/elephant.png";
    img2.alt="image of a drawing I made of an hourglass in the water";
    img3.alt="image of a drawing I made of an abstract elephant";
    img2.style.opacity=1;
    img3.style.opacity=1;
    img2.style.transform = "rotate(20deg)";
    img3.style.transform = "rotate(-5deg)";
    img2.style.width = "70%";
    img3.style.width = "60%";
    img2.style.height = "auto";
    img3.style.height = "auto";
  }

function vectorLeave() {
    var img2 = document.getElementById("home-image");
    var img3 = document.getElementById("home-image1");
    img2.src="assets/images/about/white.png";
    img3.src="assets/images/about/white.png";
    img2.style.opacity=0;
    img3.style.opacity=0;
    img2.style.transform = "rotate(0deg)";
    img3.style.transform = "rotate(0deg)";
  }


function meHover() {
    var img4 = document.getElementById("home-image");
    img4.src="assets/images/about/me.jpg";
    img4.alt="image of me";
    img4.style.opacity=1;
    img4.style.width = "80%";
    img4.style.height = "auto";
    var img5 = document.getElementById("home-image1");
    img5.src="assets/images/about/white.png";
    img5.alt="image of me";
  }

function meLeave() {
    var img4 = document.getElementById("home-image");
    img4.src="assets/images/about/white.png";
    img4.style.opacity=0;
  }


// HOME PAGE END


// MOUSE


document.addEventListener('DOMContentLoaded', () => {
  let posX = 0, posY = 0, currentPosX = 0, currentPosY = 0;
  let innerCurrentPosX = 0, innerCurrentPosY = 0;
  let delay = 4;
  mouse = document.getElementById('mouse');
  innerMouse = document.getElementById('innerMouse');

  document.onmousemove = (e) => {posX = e.pageX, posY = e.pageY;}
  function moveCursor() {
      requestAnimationFrame(moveCursor);
      mouse.style.top = (currentPosY += (posY - currentPosY) / delay) + 'px';
      mouse.style.left = (currentPosX += (posX - currentPosX) / delay) + 'px';

      innerMouse.style.top = (innerCurrentPosY += (posY - innerCurrentPosY)) + 'px';
      innerMouse.style.left = (innerCurrentPosX += (posX - innerCurrentPosX)) + 'px';
  }
    moveCursor();
});