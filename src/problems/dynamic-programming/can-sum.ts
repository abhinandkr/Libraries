export const canSum = (
	targetSum: number,
	numbers: number[],
	memo: { [key: number]: boolean } = {},
): boolean => {
	if (targetSum in memo) {
		return memo[targetSum];
	}
	if (targetSum === 0) {
		return true;
	}
	if (targetSum < 0) {
		return false;
	}

	for (let number of numbers) {
		const remainder = targetSum - number;
		if (canSum(remainder, numbers, memo)) {
			memo[targetSum] = true;
			return true;
		}
	}
	memo[targetSum] = false;
	return false;
};
