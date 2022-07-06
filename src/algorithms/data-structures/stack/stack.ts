export default class Stack<T = number> {
	private readonly items: T[];

	constructor(iterable: Iterable<T> = []) {
		// @ts-ignore
		this.items = [...iterable];
	}

	get length() {
		return this.items.length;
	}

	public pop = () => this.items.pop();

	public push = (...items: T[]) => this.items.push(...items);

	public peek = () => (this.length === 0 ? null : this.items[this.length - 1]);

	* [Symbol.iterator]() {
		for (const item of this.items) yield item;
	}
}
