JA.Views.EntryView = Backbone.View.extend({
  events: {
    "dblclick #title-click": "titleEdit"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["entries/view"]({
      entry: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  titleEdit: function () {
    var that = this;
    console.log(that);
  }


});