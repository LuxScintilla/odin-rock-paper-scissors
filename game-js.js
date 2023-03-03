const backGround = document.querySelector(".container");

backGround.addEventListener("mousemove", moveBG);

function moveBG(e) {
    backGround.style.backgroundPositionX = (e.clientX/10-150)+"px";

    backGround.style.backgroundPositionY = (e.clientY/10-100)+"px";

}