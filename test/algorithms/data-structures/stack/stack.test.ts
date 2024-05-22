import {Stack} from '../../../../src/libraries';

describe('stack', function () {
	it('should create stack object', function () {
		const stack = new Stack<string>();
		stack.push('Hello');
		expect(stack.pop()).toEqual('Hello');
	});
	it('should test iterator', function () {
		const stack = new Stack();
		stack.push(10);
		stack.push(20);
		stack.push(30);
		// @ts-ignore
		expect([...stack]).toEqual([10, 20, 30]);
	});
});
