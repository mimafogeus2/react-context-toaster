require('./dist/manifest');
require('./dist/vendor');
module.exports = {
  ContextToaster: require('./dist/index'),
  addContextToasterNotificationInterface: require('./dist/addContextToasterNotificationInterface')
}