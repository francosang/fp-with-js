import h from 'hyperscript';
import hh from 'hyperscript-helpers';

const { div, h1, a } = hh(h);

function counter(model, increment, decrement) {
  return div('.ph3', [
    h1('.mv2',
      `Count: ${model}`,
    ),
    a(
      '.f6.link.dim.ph3.pv2.mb2.dib.white.mr2.bg-black',
      { onclick: () => increment(model) },
      '+'
    ),
    a(
      '.f6.link.dim.ph3.pv2.mb2.dib.white.bg-black',
      { onclick: () => decrement(model) },
      '-'
    )
  ]);
}

export default counter;
