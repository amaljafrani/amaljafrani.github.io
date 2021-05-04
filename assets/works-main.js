
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