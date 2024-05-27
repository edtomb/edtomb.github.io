var currentSection = 0;
var sections = ['#section1', '#section2','#section3','#section4'];
var scrolling=false;
$(document).on('mousewheel DOMMouseScroll', function(event) {
  if(!scrolling) {

  
  //event.preventDefault();
  var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
    
  if(Math.abs(delta)<2){
    return;
  }
  if (delta > 0) {
    
    // Scroll up
    currentSection--;
    if(currentSection<0){
        currentSection=0;
        scrolling=false;
        return;
    }
  } else {
    // Scroll down
    currentSection++;
    if(currentSection >=sections.length){
        currentSection=sections.length-1;
        scrolling=false;
        return;
    }
  }
  if (currentSection < 0) {
    currentSection = sections.length - 1;
  } else if (currentSection >= sections.length) {
    currentSection = 0;
  }
  
  scrolling=true;
  scrollToSection(sections[currentSection]);
  setTimeout(function(){
    scrolling=false;
  },750);
}
});
function scrollToSection(section) {
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 1000);
  }
  



