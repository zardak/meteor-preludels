Package.describe({
  name: 'zardak:preludels',
  version: '0.1.0',
  summary: 'prelude.ls is a functionally oriented utility library, recommended for LiveScript',
  git: 'https://github.com/zardak/meteor-preludels'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.3');
  api.export('prelude');
  api.addFiles('prelude-browser.js');
  api.addFiles('require-preludels.js');
});
