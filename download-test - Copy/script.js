let mousrCursor = document.querySelector(".mouse");



window.addEventListener("mousemove", mouse);

function mouse(e){
    
    mousrCursor.style.top = e.pageY + "px"
    mousrCursor.style.left = e.pageX + "px"
}

