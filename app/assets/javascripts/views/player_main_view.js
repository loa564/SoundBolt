Soundbolt.Views.PlayerMainView = Backbone.FusedView.extend({

  template: JST['player_main'],

  events:{
    "click #focus-mode-switch": "switchToFocus"
  },

  initialize: function(options){
    if(options.track){
      this.model = options.track;
      this.model.fetch();
    }else{
      this.model = new Soundbolt.Models.Track();
    }

    this.listenTo(this.model, 'change remove add reset', this.render.bind(this));
  },

  switchToFocus: function(){
    Backbone.history.navigate("focus", {trigger: true})
  },

  render: function(){
    var content = this.template({ track: this.model });
    this.$el.html(content);
    return this;
  }
})
