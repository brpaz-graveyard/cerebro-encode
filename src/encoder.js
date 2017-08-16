'use strict';

const icon = require('./icon.png');
const Entities = require('html-entities').AllHtmlEntities;
const querystring = require('querystring');

const buildPreview = (value) => {
    return `<div style="max-width:100%; text-align:center;word-wrap: break-word; padding: 15px;">${value}</div>`
};

/**
 * Encodes the user inputed string into multiple formats
 * @param string input
 * @return object
 */
const getEncodedValues = (input, actions) => {

    let base64 = new Buffer(input).toString('base64');
    let urlEncoded = querystring.escape(input);
    let htmlEncoded = Entities.encode(input);

    return [
        {
            id: 'cerebro-encode-base64',
            title: 'Base64 Encoded',
            subtitle: base64,
            icon,
            clipboard: base64,
            onSelect: () => {
                actions.copyToClipboard(base64);
            },
            getPreview: () => buildPreview(base64)
        },
        {
            id: 'cerebro-encode-urlencoded',
            title: 'URL Encoded',
            subtitle: urlEncoded,
            icon,
            clipboard: urlEncoded,
            onSelect: () => {
                actions.copyToClipboard(urlEncoded);
            },
            getPreview: () => buildPreview(urlEncoded)
            
        },
        {
            id: 'cerebro-encode-htmlencoded',
            title: 'HTML Encoded',
            subtitle: htmlEncoded,
            icon,
            clipboard: htmlEncoded,
            onSelect: () => {
                actions.copyToClipboard(htmlEncoded);
            },
            getPreview: () => buildPreview(htmlEncoded)

        }
    ]
};

module.exports = {
    getEncodedValues
};