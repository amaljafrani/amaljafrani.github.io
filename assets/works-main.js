// WORKS PAGE

function workHover(name) {
    var work = document.getElementById(name);
    work.style.transform = "scale(1.01, 1.01)";
    work.style.boxShadow = "0px 0px 20px 2px #E5E2E2";

  }
  
  function workLeave(name) {
    var work = document.getElementById(name);
    work.style.transform = "scale(1, 1)";
    work.style.boxShadow = "none";
  }
  
// WORKS PAGE END
  
  
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