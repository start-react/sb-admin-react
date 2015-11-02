import NProgress from 'nProgress';

module.exports = {
  path: 'notifications',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
			require('nProgress').done();
      cb(null, require('./Notifications'))
    });
  }
}