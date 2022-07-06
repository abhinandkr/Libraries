export default function mergeSort(input: number[]) {
	const len = input.length;
	if (len < 2) {
		return;
	}
	const mid = len / 2;
	const left = input.slice(0, mid);
	const right = input.slice(mid, len);
	mergeSort(left);
	mergeSort(right);
	merge(left, right, input);
}

function merge(left: number[], right: number[], out: number[]) {
	let leftIndex = 0;
	let rightIndex = 0;
	let outIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			out[outIndex++] = left[leftIndex++];
		} else {
			out[outIndex++] = right[rightIndex++];
		}
	}
	while (leftIndex < left.length) {
		out[outIndex++] = left[leftIndex++];
	}
	while (rightIndex < right.length) {
		out[outIndex++] = right[rightIndex++];
	}
}
