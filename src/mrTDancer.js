var MrTDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('mrTDancer');
  // this.$node.addClass('hoverClass');
};

MrTDancer.prototype = Object.create(Dancer.prototype);
MrTDancer.prototype.constructor = MrTDancer;

MrTDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

