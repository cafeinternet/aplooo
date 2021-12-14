
  $(document).ready(function(){
  var classCycle=[' aplo1',' aplo2'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=[' aplo3', 'aplo4'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container2').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=[' aplo5', 'aplo6'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container4').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=[' aplo7', 'aplo8'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container5').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=[' aplo9', 'aplo10'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container7').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=[' aplo11', 'aplo12'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container8').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=[' aplo13', 'aplo14'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container9').addClass(classToAdd);
   console.log(classToAdd)
});




   document.addEventListener( "DOMContentLoaded", function() {
  // it's a div, that holds your news
  // it holds ul with news in li elements
  var div = document.getElementById( "container" );
  div.addEventListener( "scroll", function() {
    var max_scroll = this.scrollHeight - this.clientHeight;
    var current_scroll = this.scrollTop;
    var bottom = 100;
    if ( current_scroll + bottom >= max_scroll ) {
      var ul = document.getElementsByTagName( "ul" )[ 0 ];
      var current = parseInt( ul.dataset.current, 10 );
      var li = document.getElementsByTagName( "li" )[ current ];
      var new_li = li.cloneNode( true );
      ul.appendChild( new_li );
      ul.dataset.current = current + 1;
    }
  } );
} );

    $.fn.shuffleChildren = function() {
  $.each(this.get(), function(index, el) {
    var $el = $(el);
    var $find = $el.children();

    $find.sort(function() {
      return 0.5 - Math.random();
    });

    $el.empty();
    $find.appendTo($el);
  });
};

$("#shuffle").click(function() {
  // Usage
  $(".shuffle").shuffleChildren();
});

  



    // const is another way of writing var
    // this line of code creates a variable called poetic edge which is equal to any element inside of the HTML that has a class called poetic-edge, in the case of this website each html section has this class, there are about 18 elements
    const poeticEdges = document.getElementsByClassName("poetic-edge");

    // this is called a for loop, it allows you to take a group of elements and do something which each one, this for loop is adding an event listener for a mouse click, in other words it is making sure that each poetic edge is ready to do something when a person clicks on it, in this case each poetic edge is going to call the showPoetics function when a person clicks on it
    for (let i=0; i<poeticEdges.length; i++) {
      poeticEdges[i].id = i;
      poeticEdges[i].addEventListener('click', function () { showPoetics(i) });
    }

    // this is a javascript function, this particular function takes an argument, in this case the argument the letter i. arguments always go inside the parentheses of the function.
    function showPoetics(i) {
      // get all elements with the id of whatever i is equal to, in this case i is equal to a number 0-18
      const thisPoeticEdge = document.getElementById(i);
      // get all elements with the id of whatever i is equal to + 1
      const nextPoeticEdge = document.getElementById(i+1);
      // get the body element
      const body = document.getElementsByTagName('body')[0];
      // if i is equal to 0 this means that a person has clicked through the to last section of the HTML, at this point the person should be able to click back to the first section or top layer of the web page so the class time-traveling-towards-the-past is being removed and the class time-traveling-towards-the-future is being added.
      if (i === 0) {
        body.classList.remove('time-traveling-towards-the-past');
        body.classList.add('time-traveling-towards-the-future');
      }
      // if i is equal to 18 this means that a person has clicked back through the to first section of the HTML so the class time-traveling-towards-the-future is being removed and the class time-traveling-towards-the-past is being added.
      if (i === poeticEdges.length - 1 && body.classList.contains('time-traveling-towards-the-future')) {
        body.classList.remove('time-traveling-towards-the-future');
        body.classList.add('time-traveling-towards-the-past');
      }
      // if the body has the class time-traveling-towards-the-future then the person should be moving forward through the site so each poetic edge should be removing the class of hide, if the body doesnt have the the class time-traveling-towards-the-future then the person should be moving towards the past in which case the class of hide should be added back to the poetic edge.
      if (body.classList.contains('time-traveling-towards-the-future')) {
        nextPoeticEdge.classList.remove('hide');
      } else {
        thisPoeticEdge.classList.add('hide');
      }
    }
  