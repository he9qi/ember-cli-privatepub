import Ember from 'ember';

export default Ember.Service.extend({
  userPrefix: 'user',

  subscribe: function(user, subscription, callback) {
    if (!subscription) {
      Ember.Logger.debug("PrivPub invalid subscription");
      return;
    }
    subscription['user_id'] = this.get('userPrefix') + "_" + user.id;
    if (!PrivatePub.subscriptionCallbacks[subscription.channel]) {
      Ember.Logger.debug("PrivatePub subscribing to " + subscription.channel);
      PrivatePub.sign(subscription);
      PrivatePub.subscribe(subscription.channel, callback);
    }
  },

  unsubscribe: function(subscription) {
    if (!subscription) {
      Ember.Logger.debug("PrivPub invalid subscription");
      return;
    }
    Ember.Logger.debug("PrivatePub unsubscribing to " + subscription.channel);
    PrivatePub.unsubscribe(subscription.channel);
  }
});
