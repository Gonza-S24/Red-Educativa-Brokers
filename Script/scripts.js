window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("whatsapp-container").style.bottom = "20px";
    
  } else {
    document.getElementById("whatsapp-container").style.bottom = "20px";
    
  }
}

window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTopButton").classList.add("show");
    } else {
      document.getElementById("scrollToTopButton").classList.remove("show");
    }
  }
  
  document.getElementById("scrollToTopButton").addEventListener("click", function() {
    scrollToTop(1000); // 1000 milliseconds = 1 second
  });
  
  function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15);
    var scrollInterval = setInterval(function(){
      if (window.scrollY != 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    },15);
  }

  document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', () => {
      document.getElementById('check').checked = false;
    });
  });