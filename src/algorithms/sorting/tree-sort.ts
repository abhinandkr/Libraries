import {BinarySearchTree} from '../data-structures';

export default function treeSort(arr: number[]): number[] | null {
	if (!arr || arr.length === 0) {
		return null;
	}
	const tree = new BinarySearchTree<number>();
	arr.forEach(v => tree.insert(v));
	return tree.inOrderTraversal();
}
