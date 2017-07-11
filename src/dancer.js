// Creates and returns a new dancer object that can step
var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};

Dancer.prototype.step = function () {
  //Refactor using binding, to make it look pretty
  var selfMe = this;

  setTimeout(function() {
    selfMe.step();
  }, selfMe.timeBetweenSteps);
};

Dancer.prototype.setPosition = function () {
// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  
  this.$node.css(styleSettings);
  return this.$node;
};
