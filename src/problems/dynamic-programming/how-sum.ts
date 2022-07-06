export type ReturnType = number[] | null
export const howSum = (
	targetSum: number,
	numbers: number[],
	memo: { [key: number]: ReturnType } = {},
): ReturnType => {
	if (targetSum in memo) {
		return memo[targetSum];
	}
	if (targetSum === 0) {
		return [];
	}
	if (targetSum < 0) {
		return null;
	}

	for (let number of numbers) {
		const remainder = targetSum - number;
		const remainderResult = howSum(remainder, numbers, memo);
		if (remainderResult) {
			memo[targetSum] = [...remainderResult, number];
			return memo[targetSum];
		}
	}
	memo[targetSum] = null;
	return memo[targetSum];
};
