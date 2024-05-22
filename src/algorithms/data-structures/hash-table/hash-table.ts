export default class HashTable {
	private readonly capacity: number;
	private readonly data: string[][];

	private hashFunction(item: string) {
		let asciiSum = 0;
		for (let i = 0; i < item.length; i++) {
			const char = item.charAt(i);
			asciiSum += char.charCodeAt(0);
		}
		return asciiSum % this.capacity;
	}

	public constructor(capacity: number = 10) {
		this.capacity = capacity;
		this.data = new Array(capacity);
		for (let i = 0; i < capacity; i++) {
			this.data[i] = []; // Initialize each subarray separately
		}
	}

	public put(item: string) {
		const index = this.hashFunction(item);
		if (!this.data[index].includes(item)) {
			this.data[index].push(item);
		}
	}

	public contains(item: string) {
		const index = this.hashFunction(item);
		return this.data[index].includes(item);
	}

	public getData() {
		return this.data;
	}
}
