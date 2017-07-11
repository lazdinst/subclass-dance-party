describe('talisDancer', function() {

  var talisDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    talisDancer = new TalisDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(talisDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(talisDancer.$node, 'fadeToggle');
    talisDancer.step();
    debugger;
    expect(talisDancer.$node.fadeToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(talisDancer, 'step');
      expect(talisDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(talisDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(talisDancer.step.callCount).to.be.equal(2);
    });
  });
}); 