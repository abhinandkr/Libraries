import binarySearch from '../../../src/algorithms/binary-tree-searching/binary-search';

describe('test binary search', function () {
	it('should find elements', function () {
		const a = [1, 3, 4, 7, 8, 10, 11];
		expect(binarySearch(a, 1)).toEqual(0);
		expect(binarySearch(a, 3)).toEqual(1);
		expect(binarySearch(a, 4)).toEqual(2);
		expect(binarySearch(a, 7)).toEqual(3);
		expect(binarySearch(a, 8)).toEqual(4);
		expect(binarySearch(a, 10)).toEqual(5);
		expect(binarySearch(a, 11)).toEqual(6);
	});
	it('should not find elements', function () {
		const a = [5, 6, 8, 10];
		expect(binarySearch(a, 1)).toEqual(-1);
		expect(binarySearch(a, 3)).toEqual(-1);
		expect(binarySearch(a, 4)).toEqual(-1);
		expect(binarySearch(a, 7)).toEqual(-1);
	});
});
