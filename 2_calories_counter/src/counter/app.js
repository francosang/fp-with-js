import { diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';
import view from './view.js';
import handle from './handler.js';

function app(model, node) {
    let currentView = view(model, emit);
    let rootNode = createElement(currentView);

    node.appendChild(rootNode);

    function emit(msg) {
        if (typeof msg === 'object') {
            model = msg;
        } else {
            model = handle(msg, model);
        }

        const updatedView = view(model, emit);
        const patches = diff(currentView, updatedView);
        rootNode = patch(rootNode, patches);
        currentView = updatedView;
    }
}

export default app;