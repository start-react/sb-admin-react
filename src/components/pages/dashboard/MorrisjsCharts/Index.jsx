import NProgress from 'nProgress';

module.exports = {
  path: 'morrisjs-charts',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
      cb(null, require('./MorrisjsCharts'))
    });
  }
}