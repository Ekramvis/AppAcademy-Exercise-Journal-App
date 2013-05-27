window.JA = {

  Models: {},
  Collections: {},
  Routers: {},
  Views: {},



  initialize: function (entriesList, display, entriesData) {
    var entries = new JA.Collections.Entries(entriesData);

    new JA.Routers.EntriesRouter(entriesList, display, entries);
    Backbone.history.start();
  }
};