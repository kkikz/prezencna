//Scroll up button
  //Get the button:
  mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

/*
  //Parallax
$(window).scroll(function () { 
    $('#prlx').css({
        'bottom' : -($(this).scrollTop()/10)+"px" // increase # to make even slower
    }); 
 });
*/


//Gallery carousel apartman
