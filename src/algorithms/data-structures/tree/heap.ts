import { swap } from '../../../helpers'

export class Heap<T> {
  private readonly items: T[]
  private readonly selector: (item: T) => number
  private readonly comparator: (x: T, y: T) => boolean

  constructor(selector: (item: T) => number, comparator: (x: T, y: T) => boolean) {
    this.items = []
    this.selector = selector
    this.comparator = comparator
  }

  private getLeftChildIndex(i: number): number {
    return 2 * i + 1
  }

  private getRightChildIndex(i: number): number {
    return 2 * i + 2
  }

  private getParentIndex(i: number): number {
    return Math.floor((i - 1) / 2)
  }

  private getItemValue(itemIndex: number): number | null {
    return itemIndex >= 0 ? this.selector(this.items[itemIndex]) : null
  }

  public getHeap() {
    return this.items
  }

  public insert(item: T) {
    this.items.push(item)
    let itemIndex = this.items.length - 1
    let itemValue = this.selector(item)
    let parentIndex = this.getParentIndex(itemIndex)
    let parentValue = this.getItemValue(parentIndex)

    while (parentValue !== null && this.comparator(item, this.items[parentIndex])) {
      swap(this.items, itemIndex, parentIndex)
      itemIndex = parentIndex
      itemValue = this.selector(item)
      parentIndex = this.getParentIndex(itemIndex)
      parentValue = this.getItemValue(this.getParentIndex(itemIndex))
    }
  }

  // public delete(): T {
  //   const deletedItem = this.items[0];
  //   swap(this.items, 0, this.items.length - 1);
  //   let swappedItemIndex = 0;
  //   let swappedItem = this.items[swappedItemIndex];
  //   let leftChildIndex = this.getLeftChildIndex(swappedItemIndex);
  //   while (leftChildIndex < )
  //   do {
  //     let leftChildItem = this.items[this.getLeftChildIndex(swappedItemIndex)];
  //     let rightChildItem = this.items[this.getRightChildIndex(swappedItemIndex)];
  //     if (leftChildItem !== undefined && rightChildItem !== undefined) {
  //       if (this.comparator(leftChildItem, rightChildItem)) {
  //         swap(this.items, leftChildItem)
  //       }
  //
  //     }
  //   }
  //
  // }
}
