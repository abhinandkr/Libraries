export default class Queue<T> {
	private readonly items: T[];

	constructor(iterable: Iterable<T> = []) {
		this.items = [...iterable];
	}

	public get length(): number {
		return this.items.length;
	}

	public dequeue(): T | undefined {
		return this.items.shift();
	}

	public enqueue(...items: T[]) {
		if (items === undefined) {
			throw Error('Can not enqueue undefined');
		}
		this.items.push(...items);
	}

	public peek(): T | undefined {
		return this.length === 0 ? undefined : this.items[0];
	}

	public empty(): boolean {
		return this.length === 0;
	}

	public* [Symbol.iterator]() {
		for (const item of this.items) yield item;
	}

	public dequeue_back(): T | undefined {
		return this.items.pop();
	}
}
