function search(nums: number[], target: number): number {
	if (!nums || nums.length === 0) {
		return -1;
	}
	let low = 0,
		high = nums.length - 1;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (target === nums[mid]) {
			return mid;
		}
		if (target < nums[mid]) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return -1;
}

export default search;
