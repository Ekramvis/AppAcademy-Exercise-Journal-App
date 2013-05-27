window.JA = {

  Models: {},
  Collections: {},
  Routers: {},
  Views: {},



  initialize: function (entriesList, entriesData) {
    var entries = new JA.Collections.Entries(entriesData);
    new JA.Routers.EntriesRouter(entriesList, entries);
    Backbone.history.start();
  }
};