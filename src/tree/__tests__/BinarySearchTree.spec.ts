import {createLogger} from '../../utils/loggerfacory';
import {numberComparator} from '../../utils/utils';
import { BinarySearchTree } from '../BinarySearchTree';
import { InOrderVisitor, PostOrderVistor, PreOrderVisitor } from '../Visitor';

const logger = createLogger('algjs.tree.BinarySearchTree.test');

describe('Binary search tree', () => {
  it('should calculate the height of the tree to be zero', () => {
    const tree = new BinarySearchTree<number>(numberComparator);

    expect(tree.height()).toBe(0);
  });

  it('should calculate the height of the tree to be 1', () => {
    const tree = new BinarySearchTree<number>(numberComparator);

    tree.insert(0);
    expect(tree.height()).toBe(1);
  });

  it('should calculate the height of the tree to be 2', () => {
    const tree = new BinarySearchTree<number>(numberComparator);

    tree.insert(0);
    tree.insert(1);
    expect(tree.height()).toBe(2);
  });
  it('should calculate the height of the tree to be 4', () => {
    const tree = new BinarySearchTree<number>(numberComparator);

    tree.insert(0);
    tree.insert(1);
    tree.insert(3);
    tree.insert(3);
    expect(tree.height()).toBe(4);
  });

  it('should find the value on the tree', () => {
    const tree = new BinarySearchTree<number>(numberComparator);

    tree.insert(100);
    tree.insert(90);
    tree.insert(50);
    expect(tree.find(50)).toBeTruthy();
  });

  it('should traverse the tree with preorder', () => {
    const tree = new BinarySearchTree<number>(numberComparator);

    tree.insert(0);
    tree.insert(1);
    tree.insert(3);
    tree.insert(4);
    tree.insert(2);

    // tslint:disable-next-line:no-any
    tree.traverse(new PreOrderVisitor((value: any) => {
      logger.info(value.value);
    }));
  });

  it('should traverse the tree with preorder', () => {
    const tree = new BinarySearchTree<number>(numberComparator);

    tree.insert(0);
    tree.insert(1);
    tree.insert(3);
    tree.insert(4);
    tree.insert(2);

    // tslint:disable-next-line:no-any
    tree.traverse(new InOrderVisitor((value: any) => {
      logger.info(value.value);
    }));
  });

  it('should traverse the tree with preorder', () => {
    const tree = new BinarySearchTree<number>(numberComparator);

    tree.insert(0);
    tree.insert(1);
    tree.insert(3);
    tree.insert(4);
    tree.insert(2);

    // tslint:disable-next-line:no-any
    tree.traverse(new PostOrderVistor((value: any) => {
      logger.info(value.value);
    }));
  });

});
