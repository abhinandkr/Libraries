function swap(arr: number[], i: number, j: number) {
	const s = arr[i];
	arr[i] = arr[j];
	arr[j] = s;
}

export function bottomUpMaxHeapify(arr: number[], index: number) {
	const len = arr.length;
	if (len <= 1 || index >= len) {
		return;
	}
	// (x / y ) | 0 is same as Math.floor(x, y)
	while (index > 0) {
		const parent = ((index - 1) / 2) | 0;
		if (arr[parent] < arr[index]) {
			swap(arr, parent, index);
			index = parent;
		} else {
			break;
		}
	}
}

export function bottomUpMinHeapify(arr: number[], index: number) {
	const len = arr.length;
	if (len <= 1 || index >= len) {
		return;
	}
	// (x / y ) | 0 is same as Math.floor(x, y)
	while (index > 0) {
		const parent = ((index - 1) / 2) | 0;
		if (arr[parent] > arr[index]) {
			swap(arr, parent, index);
			index = parent;
		} else {
			break;
		}
	}
}

export function topDownMaxHeapify(arr: number[], length: number, index: number) {
	let largest = index;
	while (largest < length) {
		const left = 2 * largest + 1;
		const right = left + 1;
		let newLargest = largest;

		if (left < length && arr[left] > arr[newLargest]) {
			newLargest = left;
		}

		if (right < length && arr[right] > arr[newLargest]) {
			newLargest = right;
		}

		if (newLargest !== largest) {
			swap(arr, largest, newLargest);
			largest = newLargest;
		} else {
			break;
		}
	}
}

export function heapSort(arr: number[]) {
	for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
		topDownMaxHeapify(arr, arr.length, i);
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		swap(arr, i, 0);
		topDownMaxHeapify(arr, i, 0);
	}
}
