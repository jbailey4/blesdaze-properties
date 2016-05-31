import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: null,
  isCompleted: null,

  actions: {
    sendMessage() {
      const message = this.get('model');

      if (message.get('email') && message.get('message')) {
        return message.save()
          .then(() => {
            this.set('isCompleted', true);
          })
          .catch((err) => {
            this.set('errorMessage', err.error);
          })
      }
    }
  }
});
