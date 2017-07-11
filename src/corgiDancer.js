var corgiDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('corgiDancer');
};

corgiDancer.prototype = Object.create(Dancer.prototype);
corgiDancer.prototype.constructor = corgiDancer;


