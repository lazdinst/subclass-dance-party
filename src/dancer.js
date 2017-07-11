// Creates and returns a new dancer object that can step
var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition();
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

Dancer.prototype.getClose = function() {
  var hypos = [];
  var currentDancers = window.dancers;
  
  debugger;
  for (var i = 0; i < window.dancers.length; i++) {
    var closestDistance = undefined;
    var targetDancer = currentDancers[i];
    
    var otherDancers = currentDancers.slice();
    otherDancers.splice(i, 1);
    
    for (var j = 0; j < otherDancers.length; j++) {
      var compareDancer = otherDancers[j];
      var dTop, dLeft, hypo;
      
      if (targetDancer.top < compareDancer.top) {
        dTop = compareDancer.top - targetDancer.top;
      } else {
        dTop = targetDancer.top - compareDancer.top;
      }
      
      if (targetDancer.left < compareDancer.left) {
        dLeft = compareDancer.left - targetDancer.left;
      } else {
        dLeft = targetDancer.left - compareDancer.left;
      }
      //pow(x,y) => x^y , ()
      var inside = Math.pow(dLeft, 2) + Math.pow(dTop, 2);
      hypo = Math.pow(inside, 0.5);
      hypos.push(hypo);
      
      
      //there is soemthign wron with this if statement
      if (!closestDistance || closestDistance > hypo) {
        closestDistance = hypo;
        targetDancer.closest = compareDancer;
      } else {
        
      }
    }
  }
};