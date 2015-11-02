import NProgress from 'nProgress';

module.exports = {
  path: 'flot-charts',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
      cb(null, require('./FlotCharts'))
    });
  }
}