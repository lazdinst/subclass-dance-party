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
  return this.$node;
};
