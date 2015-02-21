Package.describe({
  name: 'horhekenu:box2dweb',
  version: '2.1.3',
  // Brief, one-line summary of the package.
  summary: 'Engine was developed by Erin Catto (visit http://www.gphysics.com for further information)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/RenatoSantana/Box2dWeb.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.use("Box2D", "client");
  api.versionsFrom('1.0.3.2');
  api.addFiles('horhekenu:box2dweb.js',"client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('horhekenu:box2dweb');
  api.addFiles('horhekenu:box2dweb-tests.js');
});
