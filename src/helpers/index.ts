export function swap<T>(input: T[], index1: number, index2: number) {
	if (!input) {
		throw new Error('Invalid input array');
	}
	if (input.length === 0) {
		return;
	}
	const a = input[index1];
	input[index1] = input[index2];
	input[index2] = a;
}

export type Func = (x: number) => number

/**
 *
 * @param functions
 */
export function compose(...functions: Func[]) {
	return (arg: number) => {
		return functions.reduceRight((prev: number, curr: Func) => curr(prev), arg);
	};
}

export function pipe(...functions: Func[]) {
	return (arg: number) => {
		return functions.reduce((prev: number, curr: Func) => curr(prev), arg);
	};
}
