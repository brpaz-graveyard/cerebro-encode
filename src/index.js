'use strict';

const PLUGIN_REGEX = /encode\s(.*)/;
const PLUGIN_KEYWORD = 'encode';
const icon = require('../assets/icon.png');
const encoder = require('./encoder');

const plugin = ({ term, display, actions }) => {

  const match = term.match(PLUGIN_REGEX);

  if (match) {

    if (match[1]) {

      let encodedValues = encoder.encode(match[1]);
      console.log(encodedValues);
      let results = [];
      encodedValues.forEach((item) => {
        results.push({
          title: item.title,
          icon,
          clipboard: item.value,
          onSelect: () => {
            actions.copyToClipboard(item.value);
          }
        });
      });

      display(results);
    }
  }
};

module.exports = {
  fn: plugin,
  name: 'Encoder',
  keyword: PLUGIN_KEYWORD,
  icon
};