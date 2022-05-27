export default class TreeNode<T = number> {
  private _val: T
  public get val(): T {
    return this._val
  }
  public set val(val: T) {
    this._val = val
  }

  private _left: TreeNode<T> | null
  public get left(): TreeNode<T> | null {
    return this._left
  }
  public set left(val: TreeNode<T> | null) {
    this._left = val
  }

  private _right: TreeNode<T> | null
  public get right(): TreeNode<T> | null {
    return this._right
  }
  public set right(val: TreeNode<T> | null) {
    this._right = val
  }

  constructor(val: T) {
    this._val = val
    this._left = null
    this._right = null
  }
}
