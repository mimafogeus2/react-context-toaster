require('./dist/manifest');
require('./dist/vendor');
module.exports = {
  ContextToaster: require('./dist/index').default,
  addContextToasterNotificationInterface: require('./dist/addContextToasterNotificationInterface').default
}