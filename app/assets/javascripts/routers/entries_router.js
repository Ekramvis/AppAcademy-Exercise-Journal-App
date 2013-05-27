JA.Routers.EntriesRouter = Backbone.Router.extend({

  initialize: function (entriesList, display, entries) {
    this.$entriesList = entriesList;
    this.$display = display;
    this.entries = entries;
  },

  routes: {
    "": "index",
    "entries/new": "new",
    "entries/:id": "show"
  },

  index: function () {
    var that = this;

    var entriesListView = new JA.Views.EntriesListView({
      collection: that.entries
    });

    that.$entriesList.html(entriesListView.render().$el);
  },

  show: function (id) {
    console.log("again?")
    var that = this;
    that.$display.empty();

    var entry = that.entries.find(function (entry) {
      return entry.escape("id") === id;
    });

    var entryView = new JA.Views.EntryView({
      model: entry
    });
    that.$display.html(entryView.render().$el);
  },

  new: function() {
    console.log("please")
    var that = this;
    that.$display.empty();

    var newEntryView = new JA.Views.NewEntryView({
      collection: that.entries
    });

    that.$display.html(newEntryView.render().$el);
  }

});