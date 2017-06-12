module.exports = function main(string) {
  // Write your code here
  var array = string.split('');
  var sum = 0;
  for (var i = array.length - 1; i >= 0; i--) {
  	 array[i] = parseInt(string[i]);
  	 sum += array[i];
  }
  return sum; 
};
