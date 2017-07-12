$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      500 // Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  
  
  $('.lineUpButton').on('click', function(event) {
    // debugger;
    let top = 500;
    let left;
    var screenWidth = $('body').width();
    var currentDancers = window.dancers;
    
    for (let i = 0; i < currentDancers.length; i++) {
      if (currentDancers.length === 1) {
        left = screenWidth / 2;
      } else {
        //Window 1600
        //1600 / 4 = 400
        if (i === 0) {
          initialLeft = screenWidth / (currentDancers.length + 1);
          left = initialLeft;
        } else {
          left += initialLeft;
        }
      }
      currentDancers[i].lineUp(top, left);
    }
  });  
  
  // $('body').on('click', '.dancer', function() {
  //   debugger;
  //   // window.dancers.forEach(dancer => dancer.getClosest());
  //   // link to this.closest
  // });
  
  // $('.getCloseButton').on('click', function() {
  //   window.dancers.forEach(dancer => dancer.getClosest());
  // });
  
  $('body').on('mouseenter', '.talisDancer', function() {
    $(this).css('border', '20px solid red');
  });
  
  $('body').on('mouseleave', '.talisDancer', function() {
    $(this).css('border', '20px solid blue');
  });
  
  $('body').on('mouseenter', '.corgiDancer', function() {
    var styleSettings = {
      width: 300,
      height: 300
    };
    $(this).css(styleSettings);
  });
  
  $('body').on('mouseleave', '.corgiDancer', function() {
    var styleSettings = {
      width: 150,
      height: 150
    };
    $(this).css(styleSettings);
  });
  
});

//We need a max window size
//Size of window i.e 1600, 
// take percent of window (5%)