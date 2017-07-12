describe('mrTDancer', function() {

  var mrTDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    mrTDancer = new mrTDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(mrTDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(mrTDancer.$node, 'fadeToggle');
    mrTDancer.step();
    debugger;
    expect(mrTDancer.$node.fadeToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(mrTDancer, 'step');
      expect(mrTDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(mrTDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(mrTDancer.step.callCount).to.be.equal(2);
    });
  });
}); 