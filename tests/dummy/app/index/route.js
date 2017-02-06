import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.A();
  },

  actions: {
    uploadImage: function (file) {
      return file.upload('/photos/new').then(({ body: { filename, url, type } }) => {
        this.currentModel.pushObject({
          filename,
          preview: url,
          type
        });
      }, function () {});
    }
  }
});
