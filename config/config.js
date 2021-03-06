var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'webrtc-presentation'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/webrtc-presentation-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'webrtc-presentation'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/webrtc-presentation-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'webrtc-presentation'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/webrtc-presentation-production'
  }
};

module.exports = config[env];
