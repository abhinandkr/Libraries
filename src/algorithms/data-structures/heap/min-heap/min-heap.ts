import {Heap} from '../heap';

export default class MinHeap extends Heap {
	// private readonly items: number[] = [];
	// private size: number = 0;
	//
	// private getLeftChildIndex =
	// 	(parentIndex: number) => 2 * parentIndex + 1;
	//
	// private getRightChildIndex =
	// 	(parentIndex: number) => 2 * parentIndex + 2;
	//
	// private getParentIndex =
	// 	(childIndex: number) => Math.floor((childIndex - 1) / 2);
	//
	// private hasLeftChild =
	// 	(parentIndex: number) => this.getLeftChildIndex(parentIndex) < this.size;
	//
	// private hasRightChild =
	// 	(parentIndex: number) => this.getRightChildIndex(parentIndex) < this.size;
	//
	// private hasParent =
	// 	(childIndex: number) => this.getParentIndex(childIndex) >= 0;
	//
	// private leftChild =
	// 	(parentIndex: number) => this.items[this.getLeftChildIndex(parentIndex)];
	//
	// private rightChild =
	// 	(parentIndex: number) => this.items[this.getRightChildIndex(parentIndex)];
	//
	// private parent =
	// 	(childIndex: number) => this.items[this.getParentIndex(childIndex)];
	//
	// private swap(i: number, j: number) {
	// 	const s = this.items[i];
	// 	this.items[i] = this.items[j];
	// 	this.items[j] = s;
	// }

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
