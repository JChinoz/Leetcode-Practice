var threeSumClosest = function(nums, target) {
  var sumThree = 0;
  if(nums.length == 3) {
    for(var i = 0; i < nums.length; i++) {
      sumThree += nums[i];
    }
  } else {
    nums.sort();
    for(var i = 0; i < nums.length - 3; i++) {
      let left = i + 1;
      let right = nums.length - 1;

      sumThree += nums[i] + nums[left] + nums[right];
      if 
    }
  }
  return sumThree;
}