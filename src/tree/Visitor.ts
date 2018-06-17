import { BinaryTreeNode } from './BinarySearchTree';
/**
 * Binary Tree visotor interface
 */
export interface ITreeVisitor<T> {
  visit(node: BinaryTreeNode<T>);
}

/**
 * Implements the pre-order tranverse algorithm
 */
export class PreOrderVisitor<T> implements ITreeVisitor<T> {
  private callback: Function;

  constructor(callback: Function) {
    this.callback = callback;
  }
  public visit(node: BinaryTreeNode<T>) {
    this.callback(node);

    if (node.left) {
      node.left.accept(this);
    }

    if (node.right) {
      node.right.accept(this);
    }
  }
}
/**
 * Implements the in-order tranverse algorithm
 */
export class InOrderVisitor<T> implements ITreeVisitor<T> {
  private callback: Function;

  constructor(callback: Function) {
    this.callback = callback;
  }

  public visit(node: BinaryTreeNode<T>) {
    if (node.left) {
      node.left.accept(this);
    }
    this.callback(node);

    if (node.right) {
      node.right.accept(this);
    }
  }
}

/**
 * Implements the post-order tranverse algorithm
 */
export class PostOrderVistor<T> implements ITreeVisitor<T> {
  private callback: Function;

  constructor(callback: Function) {
    this.callback = callback;
  }

  public visit(node: BinaryTreeNode<T>) {
    if (node.left) {
      node.left.accept(this);
    }
    if (node.right) {
      node.right.accept(this);
    }

    this.callback(node);
  }
}
