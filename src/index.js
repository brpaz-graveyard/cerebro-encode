'use strict';

const icon = require('./icon.png');
const encoder = require('./encoder');

const plugin = ({ term, display, actions }) => {
  const match = term.match(/encode\s(.*)/);
  if (match) {
    const input = match[1];
    if (input) {
      let results = encoder.getEncodedValues(input, actions);
      display(results);
    }
  }
};

module.exports = {
  fn: plugin,
  name: 'Encode Strings',
  keyword: 'encode',
  icon
};