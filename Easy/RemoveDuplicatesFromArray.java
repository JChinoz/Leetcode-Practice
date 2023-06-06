// Given interger nums, remove duplicates in-place such that each unique elements appears only once
// Arrays are arranged in non-decreasing order

class RemoveDuplicatesFromArray {
  public static void main(String[] args) {
    int[] nums = {1, 2, 4, 4, 4, 8, 9};

    int i = 0;
    for(int j = 1; j < nums.length; j++) {
      if(nums[i] != nums[j]) {
        i++;
        nums[i] = nums[j];
      }
    }
    System.out.println(i + 1);
  }
}