import NProgress from 'nProgress';

module.exports = {
  path: 'home',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
    	cb(null, require('./Home'));
    });

  }
}