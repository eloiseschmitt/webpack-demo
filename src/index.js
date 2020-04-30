import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  
    return element;
  }
  
  let element = component(); // Store the element to re-render on print.js changes
  document.body.appendChild(element);

  if(module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      document.body.removeChild(element);
      element = component(); // Re-render the "component" to update the click handler
      document.body.appendChild(element);
    })
  }