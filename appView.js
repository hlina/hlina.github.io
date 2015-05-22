var AppView = Backbone.View.extend({
  initialize: function($el, template, triePromise) {
    this.setElement($el);
    this.$input = this.$el.find('#input');
    this.$suggestions = this.$el.find('#suggestions-list');
    this.tmpl = _.template(template);

    this.triePromise = triePromise;
  },
  render: function(suggestions) {
    var compiled = this.tmpl({suggestions: suggestions || []});
    this.$suggestions.html(compiled);
    return this;
  },
  events: {
    "keyup #input":     'search'
  },
  search: function() {
    var that = this;
    this.triePromise.then(function (trie){
      var suggestions = trie.getSuggestions($('#input').val());
      that.render(suggestions);
    });
  }
});

window.AppView = AppView;
