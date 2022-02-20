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


//gallery
$(function() {
  var selectedClass = "";
  $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery > div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('animation');
      $("."+selectedClass).fadeIn().removeClass('visually-hidden');
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});

//lazyloading
lazyload();