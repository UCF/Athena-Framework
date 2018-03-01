/* global jQuery, lunr, SEARCH_INDEX_URL, SEARCH_DATA_URL */


(function ($) {
  let dataRequest;
  let dataJSON;
  let indexJSON;
  let idx;
  let $searchInput;

  function searchEngine(query, syncResults) {
    const results = idx.search(query);
    syncResults(results);
  }

  function initSearchEngine() {
    return $.when(
      // Get the prebuilt index
      $.ajax({
        url: SEARCH_INDEX_URL,
        dataType: 'json'
      }),

      // Get the search data
      $.ajax({
        url: SEARCH_DATA_URL,
        dataType: 'json'
      })
    ).then((indexAjax, dataAjax) => {
      indexJSON = JSON.parse(JSON.stringify(indexAjax[0]));
      dataJSON = JSON.parse(JSON.stringify(dataAjax[0]));
      idx = lunr.Index.load(indexJSON);
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
        const suggestion = dataJSON[obj.ref];
        return suggestion.title;
      },
      source: searchEngine,
      templates: {
        suggestion(obj) {
          const suggestion = dataJSON[obj.ref];
          return `<div>${suggestion.title}</div>`;
        },
        empty() {
          return '<div class="text-muted">No results found.</div>';
        }
      }
    })
      .on('typeahead:selected', (event, obj) => {
        const suggestion = dataJSON[obj.ref];
        window.location = suggestion.url;
      })
      .on('typeahead:asyncreceive', () => {
        jQuery('.tt-menu').scrollTop(0);
      });
  }

  function init() {
    $searchInput = $('#afd-search-input');

    dataRequest = initSearchEngine();
    dataRequest.done(initTypeahead);
  }

  init();
}(jQuery));
