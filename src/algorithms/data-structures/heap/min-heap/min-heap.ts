import {Heap} from '../heap';

export default class MinHeap extends Heap {

	private heapifyDown() {
		let index = 0;
		while (this.hasLeftChild(index)) {
			let smallerChildIndex = this.getLeftChildIndex(index);
			if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
				smallerChildIndex = this.getRightChildIndex(index);
			}
			if (this.items[index] < this.items[smallerChildIndex]) {
				break;
			}
			this.swap(index, smallerChildIndex);
			index = smallerChildIndex;

		}
	}

	private heapifyUp() {
		let index = this.size - 1;
		while (this.hasParent(index) && this.parent(index) > this.items[index]) {
			this.swap(this.getParentIndex(index), index);
			index = this.getParentIndex(index);
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
