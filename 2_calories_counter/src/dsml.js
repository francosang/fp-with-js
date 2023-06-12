const d = require("declarativ");
const { h1, table, thead, tbody, tr, td, th } = d;

const isValidString = param => typeof param === 'string' && param.length > 0;

const merge = (className, children) => node => node([className, ...children])

const addClass = className => children => node => node(children).attr('class', className)

const div = (className, ...children) => (isValidString(className) ? addClass(className, children) : merge(className, children))(d.div)();

module.exports = { div, h1, table, thead, tbody, tr, td, th };