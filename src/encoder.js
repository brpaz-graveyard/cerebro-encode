'use strict';

const Entities = require('html-entities').AllHtmlEntities;
const querystring = require('querystring');

/**
 * Encodes the user inputed string into multiple formats
 * @param string input
 * @return object
 */
const encode = (text) => {

    let base64Encoded = new Buffer(text).toString('base64');
    let urlEncoded = querystring.escape(text);
    let htmlEncoded = Entities.encode(text);
    return [
        {
            title: `BASE64: ${base64Encoded}`,
            value: base64Encoded
        },
        {
            title: `URL: ${urlEncoded}`,
            value: urlEncoded
        },
        {
            title: `HTML: ${htmlEncoded}`,
            value: htmlEncoded
        }
    ]
};

module.exports = {
    encode
};