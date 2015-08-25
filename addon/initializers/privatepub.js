export function initialize(registry, application) {
  application.inject('controller', 'privatePub', 'service:privatePub');
  application.inject('model', 'privatePub', 'service:privatePub');
  application.inject('component', 'privatePub', 'service:privatePub');
  application.inject('route', 'privatePub', 'service:privatePub');
}

export default {
  name: 'privatepub',
  initialize: initialize
};
