$('.trigger').on('click', function() {
	$(this).toggleClass('on');
  $('.menu').fadeToggle(200);
});

$(document).ready(function(){
  var classCycle=['container aplo3','container aplo3', 'container aplo3'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container').addClass(classToAdd);

});
