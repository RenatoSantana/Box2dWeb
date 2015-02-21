Package.describe({
  name: 'horhekenu:box2dweb',
  version: '2.1.3',
  // Brief, one-line summary of the package.
  summary: 'The Box2D physics engine was developed by Erin Catto (visit http://www.gphysics.com for further information). Release package 2.1.a.3 ',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('horhekenu:box2dweb.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('horhekenu:box2dweb');
  api.addFiles('horhekenu:box2dweb-tests.js');
});
