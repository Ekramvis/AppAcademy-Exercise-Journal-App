JA.Routers.EntriesRouter = Backbone.Router.extend({

  initialize: function (entriesList, entries) {
    this.$entriesList = entriesList;
    this.entries = entries;
  },

  routes: {
    "": "index"
  },

  index: function () {
    var that = this;

    var entriesListView = new JA.Views.EntriesListView({
      collection: that.entries
    });

    that.$entriesList.html(entriesListView.render().$el);
    console.log(that.$entriesList);
    console.log(entriesListView.render().$el);
  }


});