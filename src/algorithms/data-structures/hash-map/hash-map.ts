export default class HashMap {
	private readonly capacity: number;
	private readonly data: Array<Array<{ key: string, value: string }>>;

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

	public put(key: string, value: string) {
		const index = this.hashFunction(key);
		const bucket = this.data[index];
		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i].key === key) {
				bucket[i].value = value;
				return;
			}
		}
		bucket.push({key, value});
	}

	public get(key: string) {
		const index = this.hashFunction(key);
		const bucket = this.data[index];
		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i].key === key) {
				return bucket[i].value;
			}
		}
		return null;
	}

	public getData() {
		return this.data;
	}
}
