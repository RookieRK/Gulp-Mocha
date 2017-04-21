var assert = require('assert');
//Retrieve the value from the environment variable which is set in the gulp file
var testArray = process.env.testArray;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, testArray.indexOf(4));
    });
  });
});