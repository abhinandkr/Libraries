import {Heap} from '../heap';

export default class MaxHeap extends Heap {

	private heapifyUp() {
		let index = this.size - 1;
		while (this.hasParent(index) && this.parent(index) < this.items[index]) {
			this.swap(index, this.getParentIndex(index));
			index = this.getParentIndex(index);
		}
	}

	private heapifyDown() {
		let index = 0;
		while (this.hasLeftChild(index)) {
			let largestChildIndex = this.getLeftChildIndex(index);
			if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
				largestChildIndex = this.getRightChildIndex(index);
			}
			if (this.items[index] > this.items[largestChildIndex]) {
				break;
			}
			this.swap(largestChildIndex, index);
			index = largestChildIndex;
		}
	}

	public poll(): number {
		const element = super.poll();
		this.heapifyDown();
		return element;
	}

	public add(element: number) {
		super.add(element);
		this.heapifyUp();
	}
}
