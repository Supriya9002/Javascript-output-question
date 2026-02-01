/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const firstSearch = (nums, target) => {
  let left = 0,
    right = nums.length - 1,
    start = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      start = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return start;
};

const LastSearch = (nums, target) => {
  let left = 0,
    right = nums.length - 1,
    end = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      end = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return end;
};
var searchRange = function (nums, target) {
  return [firstSearch(nums, target), LastSearch(nums, target)];
};

let arr = [1, 2, 2, 2, 4];
console.log(searchRange(arr, 2));
// o/p: 1, 3
