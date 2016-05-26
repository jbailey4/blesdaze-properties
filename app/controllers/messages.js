import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    sendMessage() {
      const message = this.get('model');

      if (message.get('email') && message.get('message')) {
        return message.save();
      }
    }
  }
});
