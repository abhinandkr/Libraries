import {BinarySearchTree} from '../../../../src/libraries';

describe('Binary Search Tree', function () {
	let binarySearchTree: BinarySearchTree<number>;
	beforeAll(() => {
		binarySearchTree = new BinarySearchTree<number>();
		binarySearchTree.insert(12);
		binarySearchTree.insert(10);
		binarySearchTree.insert(11);
		binarySearchTree.insert(10.5);
		binarySearchTree.insert(11.5);
		binarySearchTree.insert(13);
	});
	it('should construct BST', function () {
		expect(binarySearchTree).not.toBeUndefined();
	});
	it('should search BST', () => {
		expect(binarySearchTree.search(10.5)).toEqual(true);
		expect(binarySearchTree.search(14)).toEqual(false);
	});
	it('should find minimum in BST', () => {
		const treeNode = binarySearchTree.findMin();
		// @ts-ignore
		expect(treeNode.val).toEqual(10);
	});
	it('should find maximum in BST', () => {
		const treeNode = binarySearchTree.findMax();
		// @ts-ignore
		expect(treeNode.val).toEqual(13);
	});
	it('should get height of BST', function () {
		expect(binarySearchTree.getHeight()).toEqual(3);
		const tree = new BinarySearchTree();
		expect(tree.getHeight()).toEqual(-1);
		tree.insert(1);
		expect(tree.getHeight()).toEqual(0);
	});
	it('should do pre order traversal', function () {
		expect(binarySearchTree.preOrderTraversal()).toEqual([
			12,
			10,
			11,
			10.5,
			11.5,
			13,
		]);
	});
	it('should do in order traversal', function () {
		expect(binarySearchTree.inOrderTraversal()).toEqual([
			10,
			10.5,
			11,
			11.5,
			12,
			13,
		]);
	});
	it('should do post order traversal', function () {
		expect(binarySearchTree.postOrderTraversal()).toEqual([
			10.5,
			11.5,
			11,
			10,
			13,
			12,
		]);
	});
	it('should do level order traversal', function () {
		expect(binarySearchTree.levelOrderTraversal()).toEqual([
			12,
			10,
			13,
			11,
			10.5,
			11.5,
		]);
	});
	it('should delete value in BST', function () {
		binarySearchTree.delete(11);
		expect(binarySearchTree.search(11)).toEqual(false);
		expect(binarySearchTree.inOrderTraversal()).toEqual([
			10,
			10.5,
			11.5,
			12,
			13,
		]);
	});
});
