import {Queue} from '../data-structures';

export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val);
		this.left = (left === undefined ? null : left);
		this.right = (right === undefined ? null : right);
	}
}


export default function bfs(root: TreeNode) {
	if (!root) {
		return null;
	}
	const queue: Queue<TreeNode> = new Queue<TreeNode>();
	queue.enqueue(root);
	const visited: number[] = [];
	while (!queue.empty()) {
		const current = queue.dequeue();
		if (!current) {
			return null;
		}
		visited.push(current.val);
		if (current.left) {
			queue.enqueue(current.left);
		}
		if (current.right) {
			queue.enqueue(current.right);
		}
	}
	return visited;
}
