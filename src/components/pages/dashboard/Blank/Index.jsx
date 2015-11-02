import NProgress from 'nProgress';

module.exports = {
  path: 'blank',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
      cb(null, require('./Blank'))
    });
  }
}