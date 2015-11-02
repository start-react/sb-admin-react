import NProgress from 'nProgress';

module.exports = {
  path: 'panels-wells',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
      cb(null, require('./PanelsWells'))
    });
  }
}