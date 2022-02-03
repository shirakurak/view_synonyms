(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      synonyms: null,
      inputText: null
    },
    methods: {
      getAPIs: function() {
        axios
        .get("https://wordsapiv1.p.rapidapi.com/words/" + this.inputText + "/synonyms", {
          headers: {
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
            "X-RapidAPI-Key": "write api-key"
          }
        })
        .then(response => {
          this.synonyms = response.data.synonyms;
          this.inputText = '';
        })
      }
    },
  });
})();