import { h } from 'virtual-dom';
import hh from 'hyperscript-helpers';
import generateDebugForm from './debug';
import Event from './event';

const { div, h1, button, label, form, input } = hh(h);

function fieldSet(labelText, inputValue) {
  return div('.pv2', [
    label({ className: 'w-100 f4' }, labelText),
    input({
      className: 'input-reset ba w-100',
      type: 'text',
      value: inputValue,
    }),
  ]);
}

function buttomSet(emit) {
  return div('.pv3', [
    button(
      {
        className: 'f3 pv2 ph3 bg-blue white mr2 bn',
      },
      'Save'
    ),
    button(
      {
        className: 'f3 pv2 ph3 bg-light-gray bn',
        onclick: () => {
          emit(Event.CloseMealForm)
        }
      },
      'Cancel'
    ),
  ]);
}


function formView(model, emit) {
  if (model.isAdding) {
    return div(
      { className: 'w-100 mv f3' }, [
      fieldSet('Meal', model.description),
      fieldSet('Calories', model.calories || ''),
      buttomSet(emit),
    ]);
  }

  return button(
    {
      className: 'f4 pv2 ph3 bg-blue white bn',
      onclick: () => {
        emit(Event.ShowMealForm)
      }
    },
    'Add meal'
  );
}

function view(model, emit) {
  return div([
    div({ className: 'mw6 center' }, [
      h1({ className: 'f2 pv2 bb' }, 'Calorie Counter'),
      formView(model, emit),
    ]),
    div({ className: 'pv2 v-btm' }, [
      generateDebugForm(model, emit),
    ]),
  ]);
}

export default view;
