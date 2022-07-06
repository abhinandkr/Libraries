import {compose, Func, pipe} from '../../src/helpers';

describe('Test helpers', function () {
	it('should test compose', function () {
		const double: Func = (x: number) => x * 2;
		const square: Func = (x: number) => x * x;
		const evaluate = compose(double, square);

		// @ts-ignore
		expect(evaluate(5)).toEqual(50);
	});

	it('should test pipe', function () {
		const double: Func = (x: number) => x * 2;
		const square: Func = (x: number) => x * x;
		const evaluate = pipe(double, square);

		// @ts-ignore
		expect(evaluate(5)).toEqual(100);
	});
});
