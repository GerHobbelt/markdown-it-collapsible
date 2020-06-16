/* eslint-env mocha, es6 */
/* eslint-disable camelcase */

const path = require('path');
const generate = require('@gerhobbelt/markdown-it-testgen');
const markdown_it = require('@gerhobbelt/markdown-it');
const markdown_it_collapsible = require('../');


describe('markdown-it-collapsible', () => {
  const md = markdown_it({
    html: true,
    linkify: true,
    typography: true
  }).use(markdown_it_collapsible);
  generate(path.join(__dirname, 'fixtures/collapsible.txt'), {
    header: true
  }, md);
});
