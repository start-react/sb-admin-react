import NProgress from 'nProgress';

module.exports = {
  path: 'icons',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
      cb(null, require('./Icons'))
    });
  }
}