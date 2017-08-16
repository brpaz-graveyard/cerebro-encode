
'use strict';

const Entities = require('html-entities').AllHtmlEntities;
const querystring = require('querystring');
const icon = require('./icon.png');

const plugin = ({ term, display, actions }) => {
  const match = term.match(/encode\s(.*)/);
  if (match) {
    const input = match[1];
    if (input) {
      const base64 = new Buffer(input).toString('base64');
      const id = `cerebro-encode-${base64}`;

      display({
        title: base64,
        id,
        icon,
        clipboard: base64,
        subtitle: 'Press enter to copy value to clipboard',
        onSelect: () => {
          actions.copyToClipboard(rottedValue);
        }
      })
    }
  }
};


module.exports = {
  fn: plugin,
  name: 'Encode input in multiple formats (base64, url, etc',
  keyword: 'encode',
  icon
}