function maxDepth(root: TreeNode | null): number {
  return f(root)
};


const f = (node: TreeNode | null): number => {
  if (!node) return 0
  const left = f(node.left)
  const right = f(node.right)
  return Math.max(left, right) + 1
}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
