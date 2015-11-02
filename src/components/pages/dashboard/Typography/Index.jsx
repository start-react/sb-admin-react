import NProgress from 'nProgress';

module.exports = {
  path: 'typography',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
      cb(null, require('./Typography'))
    });
  }
}