// const taskTitle = (document.getElementById('task-title'));

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index) {
//     item.textContent = `${index}: Hello`;
// }
// )

// console.log(items);

let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.colection-item:first-child');

val = list;
// get child nodes
val = list.childNodes;

console.log(val);