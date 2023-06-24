import { h } from 'virtual-dom';
import hh from 'hyperscript-helpers';

const { pre } = hh(h);

function view(model, emit) {
  return pre(JSON.stringify(model, null, 2));
}

export default view;
