import { h } from 'virtual-dom';
import hh from 'hyperscript-helpers';

const { div, h1, a } = hh(h);

function counter(model, emit) {
  return div('.ph3', [
    h1('.mv2',
      `Count: ${model}`,
    ),
    a(
      '.f6.link.dim.ph3.pv2.mb2.dib.white.mr2.bg-black',
      { onclick: () => emit(model + 1) },
      '+'
    ),
    a(
      '.f6.link.dim.ph3.pv2.mb2.dib.white.bg-black',
      { onclick: () => emit(model - 1) },
      '-'
    )
  ]);
}

export default counter;
