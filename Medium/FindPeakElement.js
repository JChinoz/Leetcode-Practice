nums = [1,2,1,3,5,6,4];

var findPeakElement = function(nums) {
  
  if(nums.length == 1) return 0;

  var peakIndex = 0;

  for(var i = 1; i < nums.length; i++) { 
    if(nums[i] > nums[i-1]) {
      if (i + 1 == nums.length) {
        peakIndex = i;
      } else {
        if (nums[i] > nums[i + 1]) {
          peakIndex = i;
        }
      }
    }
  }
  return peakIndex;
}

console.log("Peak element is at element: " + findPeakElement(nums));