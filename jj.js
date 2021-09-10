
const rightSideView = (root) => {
  const result = [];

  if (root === null) return result;

  const queue = [root];

  while (queue.length > 0) {
    let size = queue.length;
    result.push(queue[size - 1].val);

    while (size > 0) {
      const top = queue.shift();

      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);

      size -= 1;
    }
  }

  return result;
};