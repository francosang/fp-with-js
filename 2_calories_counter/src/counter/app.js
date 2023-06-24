import { diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';
import view from './view.js';

function app(model, node) {
    let currentView = view(model, emitter);
    let rootNode = createElement(currentView);

    node.appendChild(rootNode);

    function emitter(model) {
        const updatedView = view(model, emitter);
        const patches = diff(currentView, updatedView);
        rootNode = patch(rootNode, patches);
        currentView = updatedView;
    }
}

export default app;