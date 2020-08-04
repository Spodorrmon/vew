let mousrCursor = document.querySelector(".cursor");

let nevliks = document.querySelectorAll(".nev-links nav")


window.addEventListener("cursormove", cursor)

function cursor(e){
    mousrCursor.style.top = e.pageY + "px"
    mousrCursor.style.left = e.pageX + "px"
}

