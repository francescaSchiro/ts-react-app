export default {
  'production': {
    'HOSTNAME': 'https://m.sisal.it',
    'HOSTNAME_MSS': 'https://m.sisal.it/scommesse-matchpoint',
    'CDN': 'https://cdn-static.sisal.it',
    'CDN_MOBILE': 'https://cdn-m.sisal.it',
    'CDN_MOBILE_MSS': 'https://cdn-m.sisal.it/scommesse-matchpoint',
    'TRACKING': 'prod',
    'BETRADAR': 'http://cs.betradar.com',
    'MOBENGA_SSO': 'https://m.sisal.it/scommesse-matchpoint/redirect.html'
  },
  'preprod': {
    'HOSTNAME': 'https://preprod-m.sisal.it',
    'HOSTNAME_MSS': 'https://preprod-m.sisal.it/scommesse-matchpoint',
    'CDN': 'https://preprod-m.sisal.it',
    'CDN_MOBILE': 'https://preprod-m.sisal.it',
    'CDN_MOBILE_MSS': 'https://preprod-m.sisal.it/scommesse-matchpoint',
    'TRACKING': 'preprod',
    'BETRADAR': 'http://cs.betradar.com',
    'MOBENGA_SSO': 'https://preprod-m.sisal.it/scommesse-matchpoint/redirect.html'
  },
  'test': {
    'HOSTNAME': 'https://mtest-liferay.sisal.it',
    'HOSTNAME_MSS': 'https://mtest-liferay.sisal.it/scommesse',
    'CDN': 'https://test-liferay.sisal.it',
    'CDN_MOBILE': 'https://mtest-liferay.sisal.it',
    'CDN_MOBILE_MSS': 'https://mtest-liferay.sisal.it/scommesse',
    'MOBENGA_SSO': 'https://mtest-liferay.sisal.it/scommesse/redirect.html',
    'BETRADAR': 'http://csdev.betradar.com'
  },
  'pretest': {
    'HOSTNAME': 'http://10.26.103.11:9999',
    'HOSTNAME_MSS': 'http://10.26.103.11:9999',
    'MGP': '/scommesse-matchpoint/mgp/bos',
    'CDN': 'http://10.26.103.11:9999',
    'CDN_MOBILE': 'http://10.26.103.11:9999',
    'CDN_MOBILE_MSS': 'http://10.26.103.11:9999/mss-svil',
    'MOBENGA_SSO': 'http://10.26.103.11:9999/mss-svil/redirect.html',
    'BETRADAR': 'http://csdev.betradar.com'
  },
  'development': {
    'HOSTNAME': 'http://localhost',
    '_HOSTNAME_MSS': 'http://10.26.103.11:9999',
    'HOSTNAME_MSS': 'https://mtest-liferay.sisal.it/scommesse',
    '_MGP': '/scommesse-matchpoint/mgp/bos',
    'CDN': 'http://msvil-liferay.sisal.it',
    'CDN_MOBILE': 'http://msvil-liferay.sisal.it',
    'CDN_MOBILE_MSS': 'http://msvil-liferay.sisal.it/mss-svil',
    'JS': 'app',
    'CSS': '/dist/content/css',
    'IMG': '/dist/content/img',
    'FONTS': '/dist/content/fonts',
    'WIDGET': '/dist/content/widget',
    'MOBENGA_SSO': 'http://10.26.103.11:9999/redirect.html',
    'BETRADAR': 'http://csdev.betradar.com'
  }
}