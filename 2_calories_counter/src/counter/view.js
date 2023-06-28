import { h } from 'virtual-dom';
import hh from 'hyperscript-helpers';
import generateDebugForm from './debug';

const { div, h1, button, label, form, input } = hh(h);

function fieldSet(labelText, inputValue) {
  return div([
    label({ className: 'w-100 mv' }, labelText),
    input({
      className: 'p2 input-reset ba w-100 mb2',
      type: 'text',
      value: inputValue,
    }),
  ]);
}

function formView(model, emit) {
  if (model.isAdding) {
    return form(
      { className: 'w-100 mv' }, [
      fieldSet('Meal', model.description),
      fieldSet('Calories', model.calories || ''),
    ]);
  }

  return button(
    { className: 'f3 pv2 ph3 bg-blue white bn' },
    'Add meal'
  );
}

function view(model, emit) {
  return div({ className: 'mw6 center' }, [
    h1({ className: 'f2 pv2 bb' }, 'Calorie Counter'),
    formView(model, emit),
    generateDebugForm(model, emit),
  ]);
}

export default view;
