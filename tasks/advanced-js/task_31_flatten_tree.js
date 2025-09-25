/*
Напишите функцию flattenTree(tree), которая рекурсивно обходит дерево и собирает все значения его узлов в плоский массив. 

Структура дерева: 

const tree = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { 
      value: 3, 
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] }
      ] 
    }
  ]
};
Результат: flattenTree(tree) → [1, 2, 3, 4, 5]
                        
*/

function flattenTree(tree) {
    const result = [tree.value];
    for (const child of tree.children) {
        result.push(...flattenTree(child)) ;
    }
    return result;
}

const tree = {
    value: 1,
    children: [
        { value: 2, children: [] },
        {
            value: 3,
            children: [
                { value: 4, children: [] },
                { value: 5, children: [] }
            ]
        }
    ]
};

console.log(flattenTree(tree)) // [1, 2, 3, 4, 5]