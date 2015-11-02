import NProgress from 'nProgress';

module.exports = {
  path: 'notifications',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
      cb(null, require('./Notifications'))
    });
  }
}