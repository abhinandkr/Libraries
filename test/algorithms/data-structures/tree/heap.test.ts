import { Heap } from '../../../../src/algorithms/data-structures/tree/heap'

describe('Max heap', function() {
  it('should insert into max heap', function() {
    const selector = (x: number) => x
    const comparator = (x: number, y: number) => selector(x) > selector(y)
    const maxHeap = new Heap<number>(selector, comparator)
    maxHeap.insert(10)
    maxHeap.insert(4)
    maxHeap.insert(16)
    maxHeap.insert(2)
    maxHeap.insert(1)
    maxHeap.insert(11)
    maxHeap.insert(16)
    maxHeap.insert(18)
    expect(maxHeap.getHeap()).toEqual([18, 16, 16, 4, 1, 10, 11, 2])
  })
  it('should insert into min heap', function() {
    const selector = (x: number) => x
    const comparator = (x: number, y: number) => selector(x) < selector(y)
    const minHeap = new Heap<number>(selector, comparator)
    minHeap.insert(10)
    minHeap.insert(4)
    minHeap.insert(16)
    minHeap.insert(2)
    minHeap.insert(1)
    minHeap.insert(11)
    minHeap.insert(16)
    minHeap.insert(18)
    expect(minHeap.getHeap()).toEqual([1, 2, 11, 10, 4, 16, 16, 18])
  })
})
