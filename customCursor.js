//custom cursos here: 

//the empty div 
let customCursor = document.querySelector(".cursor");

//nav-links 
let navLinks = document.querySelectorAll('.nav-links a');

//eventListener
window.addEventListener('mousemove', myCursor); 
//mousemove is a registered word


function myCursor(e){

    //console.log(e);
    //of all the properties on console.log, we need pageX and pageY. They tell the location of the mouse on the screen. 

    top: customCursor.style.top = e.clientY + "px";
    customCursor.style.left = e.clientX + 'px'; 
    //at this point, we have the circle moving with the cursor, but it is uncentered/on top;  transform: translate(-50%, -50%) will fix it. 
    //also, we cannot select anything because the div remains on top of everything else on the page, pointer-events: none; will fix it. 
}

//custom cursor animation:
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        customCursor.classList.add('link-grow')
    })
})



//scrolling issues fixing: 
