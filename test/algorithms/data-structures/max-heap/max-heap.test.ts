import {
	MaxHeap,
} from '../../../../src/algorithms/data-structures/heap/max-heap';

describe('max heap', function() {
	it('should return max elements', () => {
		const nums = [4, 1, 6, 2, 8, -1, 4, 6, 7, 7, 0];
		const maxHeap = new MaxHeap();
		nums.forEach(num => maxHeap.add(num));
		let maxList = [];
		for (let i = 0; i < nums.length; i++) {
			maxList.push(maxHeap.poll());
		}
		expect(maxList).toEqual(nums.sort((a, b) => b - a));
	});
});
