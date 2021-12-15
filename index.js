// Fondos1!
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

// $(document).ready(function(){
//   var classCycle=['/styles/fondos/001.mp4','/styles/fondos/002.mp4','/styles/fondos/003.mp4','/styles/fondos/004.mp4'];

//   var randomNumber = Math.floor(Math.random() * classCycle.length);
//   var classToAdd = classCycle[randomNumber];

  
//   var video = $("#video1");
// video.find("source").attr("src", classToAdd);
// video.get().load();
// video.get().play();


// });


$(document).ready(function(){

  var videos = [
      [{type:'mp4', 'src':'/styles/fondos/001.mp4'}],
      [{type:'mp4', 'src':'/styles/fondos/002.mp4'}],
      [{type:'mp4', 'src':'/styles/fondos/003.mp4'}]
  ];
  
  // selecting random item from array,you can make your own
  var randomitem = videos[Math.floor(Math.random()*videos.length)];
  
  // This function adds a new video source (dynamic) in the video html tag
  

  // this function fires the video for particular video tag
  
  function newvideo(src)
  {
  var vid = document.getElementById("video1");
  videoadd(vid,src ,'video/mp4');
  vid.autoplay = true;
  vid.load();
  //vid.play();
  }
  // function call
  newvideo(randomitem[0].src)
  
  // Added an event listener so that everytime the video finishes ,a new video is loaded from array
  document.getElementById('myVideo').addEventListener('ended',handler,false);
  
  function handler(e)
  {
  newvideo(randomitem[0].src)
  
  }
    
  
  })





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
