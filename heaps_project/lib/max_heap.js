class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return 2 * idx;
  }

  getRightChild(idx) {
    return 2 * idx + 1;
  }

  siftUp(idx) {
    if (idx === 1) return;

    const parentIdx = this.getParent(idx);

    if (this.array[idx] > this.array[parentIdx]) {
      [this.array[idx], this.array[parentIdx]] = [
        this.array[parentIdx],
        this.array[idx]
      ];

      this.siftUp(parentIdx);
    }
  }

  insert(val) {
    this.array.push(val);

    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    const leftChild = this.getLeftChild(idx);
    const rightChild = this.getRightChild(idx);
    let leftChildVal = this.array[leftChild];
    let rightChildVal = this.array[rightChild];

    if (leftChildVal === undefined) leftChildVal = -Infinity;
    if (rightChildVal === undefined) rightChildVal = -Infinity;

    if (this.array[idx] > leftChildVal && this.array[idx] > rightChildVal)
      return;

    if (leftChildVal > rightChildVal) {
      [this.array[idx], this.array[leftChild]] = [
        this.array[leftChild],
        this.array[idx]
      ];
      this.siftDown(leftChild);
    } else {
      [this.array[idx], this.array[rightChild]] = [
        this.array[rightChild],
        this.array[idx]
      ];
      this.siftDown(rightChild);
    }
  }

  deleteMax() {
      if (this.array.length === 1) return null;
      if (this.array.length === 2) return this.array.pop();

      const max = this.array[1];

      this.array[1] = this.array.pop();
      this.siftDown(1);

      return max;
  }
}

module.exports = {
  MaxHeap
};
