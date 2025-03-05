export class Heap {
	protected readonly items: number[] = [];
	protected size: number = 0;

	protected getLeftChildIndex =
		(parentIndex: number) => 2 * parentIndex + 1;

	protected getRightChildIndex =
		(parentIndex: number) => 2 * parentIndex + 2;

	protected getParentIndex =
		(childIndex: number) => Math.floor((childIndex - 1) / 2);

	protected hasLeftChild =
		(parentIndex: number) => this.getLeftChildIndex(parentIndex) < this.size;

	protected hasRightChild =
		(parentIndex: number) => this.getRightChildIndex(parentIndex) < this.size;

	protected hasParent =
		(childIndex: number) => this.getParentIndex(childIndex) >= 0;

	protected leftChild =
		(parentIndex: number) => this.items[this.getLeftChildIndex(parentIndex)];

	protected rightChild =
		(parentIndex: number) => this.items[this.getRightChildIndex(parentIndex)];

	protected parent =
		(childIndex: number) => this.items[this.getParentIndex(childIndex)];

	protected swap(i: number, j: number) {
		const s = this.items[i];
		this.items[i] = this.items[j];
		this.items[j] = s;
	}

	public poll(): number {
		if (this.size === 0) {
			throw new Error('No elements in heap');
		}
		const minElement = this.items[0];
		this.items[0] = this.items[this.size - 1];
		this.size--;
		return minElement;
	}

	public add(element: number) {
		this.items.push(element);
		this.size++;
	}
}
