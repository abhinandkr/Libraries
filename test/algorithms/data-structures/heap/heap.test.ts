import {
	bottomUpMaxHeapify,
	bottomUpMinHeapify, heapSort,
	topDownMaxHeapify,
} from '../../../../src/algorithms/sorting/heap-sort';

describe('heap', function() {
	it('should test max heap', function() {
		const arr = [12, 9, 10, 7, 3, 18];
		bottomUpMaxHeapify(arr, 5);
		expect(arr).toEqual([18, 9, 12, 7, 3, 10]);
	});
	it('should test min heap', function() {
		const arr = [3, 16, 10, 24, 30, 18, 17, 4];
		bottomUpMinHeapify(arr, 7);
		expect(arr).toEqual([3, 4, 10, 16, 30, 18, 17, 24]);
	});

	it('should test max heap 3', function() {
		const arr = [17, 4, 9, 8, 0, 1, 21, 14];
		for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
			topDownMaxHeapify(arr, arr.length, i);
		}
		expect(arr).toEqual([21, 14, 17, 8, 0, 1, 9, 4]);
	});
});

describe('heap sort', function() {
	it('should return [2, 6, 17, 21, 54, 78, 99]', function() {
		const arr = [21, 54, 2, 17, 6, 99, 78];
		heapSort(arr);
		expect(arr).toEqual([2, 6, 17, 21, 54, 78, 99]);
	});
});
