import 'tachyons';
import { diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';
import counter from './counter/view.js';

function init(model, node) {
  let currentView = counter(model, emitter);
  let rootNode = createElement(currentView);

  node.appendChild(rootNode);

  function emitter(model) {
    const updatedView = counter(model, emitter);
    const patches = diff(currentView, updatedView);
    rootNode = patch(rootNode, patches);
    currentView = updatedView;
  }
}

const rootNode = document.getElementById('app');
init(0, rootNode);