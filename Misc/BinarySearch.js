var array = [1,2,3,4,5,6,7,8,9,10];

var binarySearch = (array, target, leftIndex, rightIndex) => {
  if(leftIndex > rightIndex) {
    return -1
  };

  var midPoint = Math.floor((leftIndex + rightIndex) / 2);
  console.log(`Checking index of [${midPoint}] with value of: ${array[midPoint]}`);
  if(array[midPoint] ==  target) {
    return array[midPoint];
  }

  if(array[midPoint] > target) {
    console.log("Searching Left");
    return binarySearch(array, target, leftIndex, midPoint - 1);
  } else {
    console.log("Searching Right");
    return binarySearch(array, target, midPoint + 1, rightIndex);
  }
}

console.log(binarySearch(array, 10, 0, array.length - 1));