let mousrCursor = document.querySelector(".mouse");

let nevliks = document.querySelectorAll(".nev-links nav")


window.addEventListener("mousemove", mouse)

function mouse(e){
    console.log(e)
    mousrCursor.style.top = e.pageY + "px"
    mousrCursor.style.left = e.pageX + "px"
}

