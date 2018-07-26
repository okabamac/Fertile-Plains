//function for smooth scrolling from page to page
$("a").on('click', function(event) {
    if (this.hash !== "") {
           event.preventDefault();
      var hash = this.hash;
  $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
           window.location.hash = hash;
      });
    } 
  });

  var i=0;
  var images=[];
  var time=3500;
  images[0]='images/amenities.jpg';
  images[1]='images/business growth.jpg';
  images[2]='images/business-growth.jpg';
  images[3]='images/customer service.jpg';
  images[4]='images/development.jpg';
  images[5]='images/partnership.jpg';
   function changeImg(){
  document.slide.src=images[i];
  if(i<images.length-1)
  {
  i++;
  }
  else
  {
  i=0;
  }
  setTimeout("changeImg()",time);
  }
  window.onload=changeImg;
  

 
