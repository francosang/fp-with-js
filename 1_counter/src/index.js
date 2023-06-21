import 'tachyons';
import counter from './counter/view.js';

var currentView = null;

const view = model => counter(
  model,
  (model) => replace(model + 1, currentView),
  (model) => replace(model - 1, currentView),
);

const replace = (model, oldView) => {
  currentView = view(model);
  document.getElementById('app').replaceChild(currentView, oldView);
}

const init = model => {
  currentView = view(model);
  document.getElementById('app').appendChild(currentView);
}

init(0);