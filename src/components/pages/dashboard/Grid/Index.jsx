import NProgress from 'nProgress';

module.exports = {
  path: 'grid',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
      cb(null, require('./Grid'))
    });
  }
}