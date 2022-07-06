export const fibonacci_memoized = (n: number, memo: any = {}): number => {
	if (n in memo) {
		return memo[n];
	}
	if (n <= 1) {
		return 1;
	}
	memo[n] = fibonacci_memoized(n - 1, memo) + fibonacci_memoized(n - 2, memo);
	return memo[n];
};

export const fibonacci = (n: number): number => {
	if (n <= 1) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
};
