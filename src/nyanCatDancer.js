var NyanCatDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('nyanCatDancer');
  // this.$node.addClass('hoverClass');
};

NyanCatDancer.prototype = Object.create(Dancer.prototype);
NyanCatDancer.prototype.constructor = NyanCatDancer;

NyanCatDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};