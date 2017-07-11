var TalisDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('talisDancer');
  this.$node.addClass('hoverClass');
};

TalisDancer.prototype = Object.create(Dancer.prototype);
TalisDancer.prototype.constructor = TalisDancer;

TalisDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.fadeToggle();
};

