// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

const nextGreterElement = function (nums1, nums2) {
  let map = new Map();
  let stack = [];
  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] <= num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  console.log(map)
  return nums1.map((num) => map.get(num) || -1);
};

console.log(nextGreterElement([4,1,2], [1, 3, 4, 2]));
