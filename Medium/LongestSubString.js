console.log("TESTING");

var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if(s.length === 0) return 0;
  if(s.length === 1) return 1;

  for(let i = 0; i < s.length; i++){
    while(set.has(s[i])){
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    maxSize = Math.max(maxSize, set.size);
  }
  return maxSize;
  // if(s.length == 1) return 1;
  
  // let subString = [];
  // let maxSize = 0;
  // for(let i = 0; i < s.length; i++){
  //   while(subString.includes(s[i])){
  //     if(maxSize === 0){
  //       maxSize = subString.length;
  //     } else{
  //       if(subString.length > maxSize){
  //         maxSize = subString.length;
  //       }
  //     }
  //     subString.shift();
  //   }
  //   subString.push(s[i]);
  // }

  // if(subString.length > maxSize) {
  //     return subString.length;
  // }
  // return maxSize;
};
console.log(lengthOfLongestSubstring("abbcdb"));