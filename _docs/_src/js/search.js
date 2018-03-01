/* global jQuery, lunr */


(function ($) {
  let dataURL;
  let dataRequest;
  let data;
  let idx;
  let $searchInput;

  function searchEngine(query, syncResults) {
    const results = idx.search(query);
    // console.log(results);
    syncResults(results);
  }

  function initSearchEngine() {
    return $.ajax({
      url: dataURL,
      dataType: 'json'
    }).then((json) => {
      idx = lunr(function () {
        this.field('id');
        this.field('title');
        this.field('content');

        $.each(json, (index, value) => {
          this.add(value);
        });
      });
      data = json;
    });
  }

  function initTypeahead() {
    $searchInput.typeahead({
      hint: false,
      highlight: true,
      minLength: 3
    },
    {
      name: 'pages-data',
      displayKey(obj) {
        const suggestion = data[obj.ref];
        return suggestion.title;
      },
      source: searchEngine,
      templates: {
        suggestion(obj) {
          const suggestion = data[obj.ref];
          return `<div>${suggestion.title}</div>`;
        },
        empty() {
          return '<div class="text-muted">No results found.</div>';
        }
      }
    })
      .on('typeahead:selected', (event, obj) => {
        const suggestion = data[obj.ref];
        window.location = suggestion.url;
      })
      .on('typeahead:asyncreceive', () => {
        jQuery('.tt-menu').scrollTop(0);
      });
  }

  function init() {
    dataURL = 'http://localhost:3000/Athena-Framework/docs-local/search-data.json';
    $searchInput = $('#afd-search-input');

    dataRequest = initSearchEngine();
    dataRequest.done(initTypeahead);
  }

  init();
}(jQuery));
