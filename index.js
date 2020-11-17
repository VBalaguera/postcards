console.log("test"); 

// from the top
const main = document.querySelector("#container");
const divs = [...container.children];
divs.sort((a, b) => a.id - b.id);
divs.forEach(divs => main.appendChild(divs));


// clickable from the top
function descendingOrder() {
    const main = document.querySelector("#container");
    const divs = [...container.children];
    divs.sort((a, b) => a.id - b.id);
    divs.forEach(divs => main.appendChild(divs));
}

// newest updates first here 
function updatesFirst() {
    const main = document.querySelector("#container");
    const divs = [...container.children];
    divs.sort((a, b) => b.id - a.id);
    divs.forEach(divs => main.appendChild(divs));
}


// hiding custom cursor on mobile 
function is_touch_device() {  
    try {  
      document.createEvent("TouchEvent");  
      return true;  
    } catch (e) {  
      return false;  
    }  
  }
  
  console.log(is_touch_device());


//fade out transition on scroll for all postcards

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".postcard").each(function() {
        /* Check the location of each desired element */
        
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });


  