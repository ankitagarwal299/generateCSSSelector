// Import stylesheets
import './style.css';

// Write Javascript code!
const root = document.getElementById('root');
const target = document.getElementById('target');

/*
Output:
"div[id='root'] > 
    section:nth-child(2) > 
                p:nth-child(1) > 
                          span:nth-child(1) > 
                                  button:nth-child(2)"
 */

function generateSelector(root, target) {
  if (!root || !target) return '';
  let selectors = [];

  while (target != root) {
    let nth = Array.from(target.parentNode.children).indexOf(target) + 1;

    let curSelector = `${target.parentNode.tagName}:nth-child(${nth})`;

    selectors.unshift(curSelector);

    target = target.parentNode;
  }
  console.log(selectors);

  return selectors.map((_) => _.toLowerCase()).join(' > ');
}

console.log(generateSelector(root, target));

//https://www.youtube.com/watch?v=ql3TpOKHiL4
