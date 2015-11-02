import NProgress from 'nProgress';

module.exports = {
  path: 'morrisjs-charts',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
			require('nProgress').done();
      cb(null, require('./MorrisjsCharts'))
    });
  }
}