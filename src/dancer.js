// Creates and returns a new dancer object that can step
var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition();
  this.context = this;
  this.$node.on('click', this.getClosest.bind(this.context));
  //this.id = Math.rand();
};

Dancer.prototype.step = function () {
  //Refactor using binding, to make it look pretty
  var selfMe = this;

  setTimeout(function() {
    selfMe.step();
  }, selfMe.timeBetweenSteps);
};

Dancer.prototype.setPosition = function () {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  
  this.$node.css(styleSettings);
  //return this.$node;
};

Dancer.prototype.lineUp = function(top, left) {
  var styleSettings = {
    position: 'fixed',
    top: top, // fixed,
    left: left //Width of the page / the dancers array length
  };
  console.log(styleSettings);
  this.$node.css(styleSettings);
};

Dancer.prototype.getClosest = function() {
  var hypos = [];
  var currentDancer = this;
  var index = window.dancers.indexOf(this);
  var closestDistance = undefined;
  
  var otherDancers = window.dancers.slice();
  otherDancers.splice(index, 1);
  
  for (var j = 0; j < otherDancers.length; j++) {
    var compareDancer = otherDancers[j];
    var dTop, dLeft, hypo;
    
    if (currentDancer.top < compareDancer.top) {
      dTop = compareDancer.top - currentDancer.top;
    } else {
      dTop = currentDancer.top - compareDancer.top;
    }
    
    if (currentDancer.left < compareDancer.left) {
      dLeft = compareDancer.left - currentDancer.left;
    } else {
      dLeft = currentDancer.left - compareDancer.left;
    }
    var inside = Math.pow(dLeft, 2) + Math.pow(dTop, 2);
    hypo = Math.pow(inside, 0.5);
    hypos.push(hypo);
    
    if (!closestDistance || closestDistance > hypo) {
      closestDistance = hypo;
      currentDancer.closest = compareDancer;
    } 
  }
  // debugger;
  $(this.$node).css('border', '20px solid pink');
  $(this.closest.$node).css('border', '20px solid pink');
  
};

// Dancer.prototype.getClosest = function() {
//   debugger;
//   var hypos = [];
//   var currentDancers = window.dancers;
//   for (var i = 0; i < window.dancers.length; i++) {
//     var closestDistance = undefined;
//     var targetDancer = currentDancers[i];
    
//     var otherDancers = currentDancers.slice();
//     otherDancers.splice(i, 1);
    
//     for (var j = 0; j < otherDancers.length; j++) {
//       var compareDancer = otherDancers[j];
//       var dTop, dLeft, hypo;
      
//       if (targetDancer.top < compareDancer.top) {
//         dTop = compareDancer.top - targetDancer.top;
//       } else {
//         dTop = targetDancer.top - compareDancer.top;
//       }
      
//       if (targetDancer.left < compareDancer.left) {
//         dLeft = compareDancer.left - targetDancer.left;
//       } else {
//         dLeft = targetDancer.left - compareDancer.left;
//       }
//       var inside = Math.pow(dLeft, 2) + Math.pow(dTop, 2);
//       hypo = Math.pow(inside, 0.5);
//       hypos.push(hypo);
      
//       if (!closestDistance || closestDistance > hypo) {
//         closestDistance = hypo;
//         targetDancer.closest = compareDancer;
//       } 
//     }
//   }
// };

// need to generate targetDancer.closest at the moment of clicking

// auto run getclose, so automatically generate this.closest for each dancer
// the moment you click on the dancer, 
  // it gets close to its closest dancer
    // using the coordinates -- closest dancer's top & left
  // 




