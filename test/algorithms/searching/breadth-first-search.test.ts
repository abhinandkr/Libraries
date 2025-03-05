import bfs, {
	TreeNode,
} from '../../../src/algorithms/binary-tree-searching/breadth-first-search';

describe('breadth-first-search', function() {
	const node1 = new TreeNode(1);
	const node7 = new TreeNode(7);
	const node9 = new TreeNode(9);
	const node2 = new TreeNode(2, node1);
	const node4 = new TreeNode(4);
	const node8 = new TreeNode(8, node7, node9);
	const node3 = new TreeNode(3, node2, node4);
	const node6 = new TreeNode(6, undefined, node8);
	const root = new TreeNode(5, node3, node6);

	it('should return bfs 1', function() {
		expect(bfs(root)).toEqual([5, 3, 6, 2, 4, 8, 1, 7, 9]);
	});
});
