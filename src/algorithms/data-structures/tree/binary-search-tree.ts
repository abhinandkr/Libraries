import TreeNode from './tree-node'
import { Queue } from '../queue'

export type Node<T> = TreeNode<T> | null

/**
 * Binary search tree stored as linked list
 */
export default class BinarySearchTree<T = number> {
  private _root: Node<T> = null
  get root(): Node<T> {
    return this._root
  }

  public insert(data: T, currentNode: Node<T> = this.root): Node<T> {
    if (!this.root) {
      if (currentNode) {
        throw new Error('Initialize the tree by passing null to insert()')
      }
      this._root = new TreeNode<T>(data)
      return this.root
    }
    if (!currentNode) {
      currentNode = new TreeNode<T>(data)
    } else if (data <= currentNode.val) {
      currentNode.left = this.insert(data, currentNode.left)
    } else {
      currentNode.right = this.insert(data, currentNode.right)
    }
    return currentNode
  }

  public search(data: T, currentNode: Node<T> = this.root): boolean {
    if (!this.root || !currentNode) {
      return false
    } else if (currentNode.val === data) {
      return true
    } else if (data <= currentNode.val) {
      return this.search(data, currentNode.left)
    } else {
      return this.search(data, currentNode.right)
    }
  }

  public delete(data: T, currentNode: Node<T> = this.root) {
    if (currentNode === null) {
      return null
    }
    if (currentNode.left && data < currentNode.val) {
      currentNode.left = this.delete(data, currentNode.left)
    } else if (currentNode.right && data > currentNode.val) {
      currentNode.right = this.delete(data, currentNode.right)
    } else {
      if (!currentNode.left && !currentNode.right) {
        return null
      } else if (!currentNode.left) {
        return currentNode.right
      } else if (!currentNode.right) {
        return currentNode.left
      } else {
        const min: Node<T> = this.findMin(currentNode.right)
        if (min) {
          currentNode.val = min.val
          currentNode.right = this.delete(min.val, currentNode.right)
        }
      }
    }
    return currentNode
  }

  public findMin(currentNode: Node<T> = this.root): Node<T> {
    if (!this.root || !currentNode) {
      throw new Error('Tree is empty')
    }
    return currentNode.left ? this.findMin(currentNode.left) : currentNode
  }

  public findMax(currentNode: Node<T> = this.root): Node<T> {
    if (!this.root || !currentNode) {
      throw new Error('Tree is empty')
    }
    return currentNode.right ? this.findMin(currentNode.right) : currentNode
  }

  public getHeight(currentNode: Node<T> = this.root): number {
    if (!currentNode) {
      return -1
    }
    if (!currentNode.left && !currentNode.right) {
      return 0
    }
    // eslint-disable-next-line max-len
    return 1 + Math.max(this.getHeight(currentNode.left), this.getHeight(currentNode.right))
  }

  public preOrderTraversal(currentNode: Node<T> = this.root): T[] {
    if (!currentNode) {
      return []
    }
    return [
      currentNode.val,
      ...this.preOrderTraversal(currentNode.left),
      ...this.preOrderTraversal(currentNode.right)
    ]
  }

  public inOrderTraversal(currentNode: Node<T> = this.root): T[] {
    if (!currentNode) {
      return []
    }
    return [
      ...this.inOrderTraversal(currentNode.left),
      currentNode.val,
      ...this.inOrderTraversal(currentNode.right)
    ]
  }

  public *inOrderTraversal_Iterator(currentNode: Node<T> = this.root): Generator {
    if (!currentNode) {
      yield []
    } else {
      return [
        yield this.inOrderTraversal_Iterator(currentNode.left),
        currentNode.val,
        yield this.inOrderTraversal_Iterator(currentNode.right)
      ]
    }
  }

  public postOrderTraversal(currentNode: Node<T> = this.root): T[] {
    if (!currentNode) {
      return []
    }
    return [
      ...this.postOrderTraversal(currentNode.left),
      ...this.postOrderTraversal(currentNode.right),
      currentNode.val
    ]
  }

  public levelOrderTraversal(currentNode: Node<T> = this.root): T[] | null {
    if (!currentNode) {
      return null
    }
    const queue = new Queue<TreeNode<T>>()
    queue.enqueue(currentNode)
    const values: T[] = []
    while (!queue.empty()) {
      const front = queue.dequeue()
      if (front) {
        values.push(front.val)
        front.left && queue.enqueue(front.left)
        front.right && queue.enqueue(front.right)
      }
    }
    return values
  }
}
