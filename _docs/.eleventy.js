const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItTOC = require('markdown-it-toc-done-right');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const hljs = require('highlight.js');


// Slug-generation function ported over from AnchorJS
// for consistent slug-generation from prior Jekyll docs:
const urlify = function (text) {
  // Regex for finding the non-safe URL characters (many need escaping): & +$,:;=?@"#{}|^~[`%!'<>]./()*\ (newlines, tabs, backspace, & vertical tabs)
  var nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g,
    urlText;

  // Note: we trim hyphens after truncating because truncating can cause dangling hyphens.
  // Example string:                      // " ⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
  urlText = text.trim()                   // "⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
    .replace(/\'/gi, '')                  // "⚡⚡ Dont forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
    .replace(nonsafeChars, '-')           // "⚡⚡-Dont-forget--URL-fragments-should-be-i18n-friendly--hyphenated--short--and-clean-"
    .replace(/-{2,}/g, '-')               // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-short-and-clean-"
    .substring(0, 64)                     // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-"
    .replace(/^-+|-+$/gm, '')             // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated"
    .toLowerCase();                       // "⚡⚡-dont-forget-url-fragments-should-be-i18n-friendly-hyphenated"

  return urlText;
};

// Markdown parser for content within shortcodes
const mdInline = new markdownIt({
  html: true
}).disable('code');

// Markdown parser for 11ty-processed content
const md = mdInline.use(markdownItAnchor, {
  level: [2, 3, 4, 5],
  slugify: urlify,
  permalink: true,
  permalinkSymbol: '<span class="fa fa-link" aria-label="Anchor"></span>'
}).use(markdownItTOC, {
  placeholder: '\{\:toc\}',
  slugify: urlify,
  listType: 'ul'
});


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
    content = entities.decode(entities.encode(mdInline.render(content)));
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
    pathPrefix: process.env.ELEVENTY_ENV === 'production' ? '/Athena-Framework' : '/Athena-Framework/docs-local',
    dir: {
      input: './', // Equivalent to Jekyll's source property
      output: process.env.ELEVENTY_ENV === 'production' ? '../docs' : '../docs-local', // Equivalent to Jekyll's destination property
      layouts: '_layouts'
    }
  };
};
