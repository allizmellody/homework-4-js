const assert = require('assert');
const index = require('./index');

const {
  largest, smallest,
  transform, sum,
  countDown
} = index;

describe('val', function() {
  it('should return max value', function() {
    assert.equal(largest(2, 0.1, -5, 100, 3), 100);
  });

  it('should return min value', function() {
    assert.equal(smallest(2, 0.1, -5, 100, 3), -5);
  });

  it('should return error if arguments contains object', function() {
    assert.throws(() => largest({ key: 'value' }), TypeError);
    assert.throws(() => smallest({ key: 'value' }), TypeError);
  });
});

describe('transform', function() {
  it('should return value by index', function() {
    const newArray = transform([10, 20]);
    assert.equal(newArray[0](), 10);
    assert.equal(newArray[1](), 20);
  });
  it('should return error if value if object', function() {
    assert.throws(() => transform({ key: 'value' }), TypeError);
  });
  it('should return error if array value contains object', function() {
    assert.throws(() => transform([{ key: 'value' }]), TypeError);
  });
});

describe('sum', function() {
  it('should return sum of elements', function() {
    assert.equal(sum(1, 3, 5, 7), 16);
  });
  it('should return error if arguments contains object', function() {
    assert.throws(() => sum({ key: 'value' }), TypeError);
  });
});

describe('countDown', function() {
  this.timeout(4000);
  it('should counting down starting by value', function(done) {
    countDown(3);
    setTimeout(done, 3000);
  });
});