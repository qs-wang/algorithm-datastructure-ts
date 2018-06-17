import { Compare } from '../utils/utils';
import { ITreeVisitor } from './Visitor';

/**
 * Presents the binary tree node
 */
export class BinaryTreeNode<T> {
  public value: T;
  public left: BinaryTreeNode<T>;
  public right: BinaryTreeNode<T>;
  constructor(value: T) {
    this.value = value;
  }

  public accept(visitor: ITreeVisitor<T>) {
    visitor.visit(this);
  }
}

/**
 * Implements the BST
 */
export class BinarySearchTree<T> {
  private root: BinaryTreeNode<T>;

  constructor(private comparationFn: (a: T, b: T) => number) {
  }

  public insert(value: T) {
    if (!this.root) {
      this.root = new BinaryTreeNode(value);
    } else {
      this.insertToSubTree(this.root, value);
    }
  }

  public height() {
    return this.calHeight(this.root);
  }

  public find(value: T) {
    return this.findOnSubTree(this.root, value);
  }

  public traverse(visitor: ITreeVisitor<T>) {
    if (!this.root) {
      throw new Error('Empty tree');
    }

    visitor.visit(this.root);
  }
  private findOnSubTree(root: BinaryTreeNode<T>, value: T) {
    if (!root) {
      return false;
    }
    const compareResult = this.comparationFn(value, root.value);
    if (compareResult === Compare.EQUALS) {
      return true;
    } else if (compareResult === Compare.LESS_THAN) {
      return this.findOnSubTree(root.left, value);
    } else {
      return this.findOnSubTree(root.right, value);
    }
  }

  private calHeight(root: BinaryTreeNode<T>) {
    if (!root) {
      return 0;
    }
    let left = 0;
    if (root.left) {
      left = this.calHeight(root.left);
    }

    let right = 0;
    if (root.right) {
      right = this.calHeight(root.right);
    }

    return Math.max(left, right) + 1;
  }

  private insertToSubTree(root: BinaryTreeNode<T>, value: T) {
    if (this.comparationFn(value, root.value) === Compare.LESS_THAN) {
      if (!root.left) {
        root.left = new BinaryTreeNode(value);
      } else {
        this.insertToSubTree(root.left, value);
      }
    } else {
      if (!root.right) {
        root.right = new BinaryTreeNode(value);
      } else {
        this.insertToSubTree(root.right, value);
      }
    }
  }
}
