module.exports = function getZerosCount(number) {
  // your implementation
  var zeros = 0;
  for(n = 1; Math.floor(number/Math.pow(5,n)) > 0; n++) {
    zeros += Math.floor(number/Math.pow(5,n));
  }
    return zeros;
}


