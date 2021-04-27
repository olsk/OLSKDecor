const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'OLSKDecorRoute',
			OLSKRouteFunction (req, res, next) {
				return res.send(require('fs').readFileSync('index.html', 'utf-8').replace('</head>', `<script>
  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
  ':35729/livereload.js?snipver=1"></' + 'script>')
</script></head>`));
			},
		}];
	},

};

Object.assign(exports, mod)
