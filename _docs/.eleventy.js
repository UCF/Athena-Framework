const MarkdownIt = require('markdown-it');
const md = new MarkdownIt({
  html: true
}).disable('code');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const hljs = require('highlight.js');


module.exports = function (eleventyConfig) {
  //
  // Eleventy configuration
  //
  eleventyConfig.setLibrary('md', md);

  eleventyConfig.setLiquidOptions({
    root: [
      '_includes'
    ]
  });

  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('LICENSE');
  eleventyConfig.addPassthroughCopy('static');

  //
  // Shortcode | Callout (Alert)
  //
  eleventyConfig.addPairedShortcode('callout', function (content, callout_type) {
    // Render content as markdown first; otherwise
    // it gets parsed as HTML and markdown isn't translated.
    // https://www.11ty.dev/docs/languages/markdown/#why-cant-i-return-markdown-from-paired-shortcodes-to-use-in-a-markdown-file
    content = entities.decode(entities.encode(md.render(content)));
    return `<div class="afd-callout afd-callout-${callout_type}">${content}</div>`;
  });

  //
  // Shortcode | Highlighted Code
  //
  eleventyConfig.addPairedShortcode('highlight', function (content, language) {
    code_class = `language-${language}`;

    // Markdown has a bad time with multiple linebreaks between HTML.
    // Force a &NewLine; entity between new lines to ensure Markdown
    // doesn't choke:
    highlighted = content.replace(/\n\n/g, '\n&NewLine;\n');

    // Perform syntax highlighting on code sample if it's a
    // language that can be reliably highlighted from Markdown:
    if (language === 'html') {
      highlighted = hljs.highlight(language, highlighted).value;
      code_class = 'nohighlight'; // disable front-end highlighting
    }

    // Now that our transformed HTML has been succesfully highlighted,
    // remove our manual newline entity insertions in the code sample:
    highlighted = highlighted.replace(/&amp;NewLine;/g, '');

    return `<div class="highlight"><pre><code class="${code_class}">${highlighted}</code></pre></div>`;
  });

  //
  // Shortcode | Code Example
  //
  eleventyConfig.addPairedShortcode('example', function (content) {
    // Markdown has a bad time with multiple linebreaks between HTML.
    // Force a &NewLine; entity between new lines to ensure Markdown
    // doesn't choke:
    highlighted = content.replace(/\n\n/g, '\n&NewLine;\n');

    // Perform syntax highlighting on code sample
    highlighted = hljs.highlight('html', entities.decode(highlighted)).value;

    // Now that our transformed HTML has been succesfully highlighted,
    // remove our manual newline entity insertions in the code sample:
    highlighted = highlighted.replace(/&amp;NewLine;/g, '');

    return `<div class="afd-example">${content}</div><div class="highlight"><pre><code class="nohighlight">${highlighted}</code></pre></div>`;
  });

  //
  // Build options
  //
  return {
    pathPrefix: '/Athena-Framework/docs-local',
    dir: {
      input: './', // Equivalent to Jekyll's source property
      output: '../docs-local', // Equivalent to Jekyll's destination property
      layouts: '_layouts'
    }
  };
};
