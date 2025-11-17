// Input: nums = [3,2,3]
// Output: 3

var mejorityElement = function (nums) {
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
    console.log(map)
    if (map.get(num) > Math.floor(nums.length / 2)) {
      return num;
    }
  }
};
console.log(mejorityElement([3,2,3]))