import NProgress from 'nProgress';

module.exports = {
  path: 'tables',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
      cb(null, require('./Tables'))
    });
  }
}