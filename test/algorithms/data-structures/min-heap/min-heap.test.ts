import {MinHeap} from '../../../../src/algorithms/data-structures/heap/min-heap';

describe('min heap', function() {
	it('should return min elements', () => {
		const nums = [4, 1, 6, 2, 8, -1, 4, 6, 7, 7];
		const minHeap = new MinHeap();
		nums.forEach(num => minHeap.add(num));
		let minList =[];
		for(let i = 0; i < nums.length; i++) {
			minList.push(minHeap.poll());
		}
		expect(minList).toEqual(nums.sort());
	});
});
