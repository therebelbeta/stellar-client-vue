var _ = require('lodash');
var moment = require('moment');
var request = require('superagent');
var domready = require('domready');
var store = require('store');
var Vue = require('vue');

var config = {
  // api: 'http://stellarapi.n.ode.rocks:3100/api/'
  api: 'http://localhost:3100/api/'
}

// Begin Logic
domready(function() {
  //Get Logo
  var vm = new Vue({
    el: '#v-app',
    data: {
      loggedIn: false,
      user: {},
      tags: [],
      lastSynced: '',
      repos: [{
        "id": 27230478,
        "name": "ronin",
        "full_name": "vdemedes/ronin",
        "owner_login": "vdemedes",
        "owner_id": 697676,
        "owner_avatar_url": "https://avatars.githubusercontent.com/u/697676?v=3",
        "isPrivate": false,
        "html_url": "https://github.com/vdemedes/ronin",
        "description": "Toolkit for shining CLI applications",
        "fork": false,
        "created_at": "2014-11-27T15:11:57Z",
        "updated_at": "2014-12-13T01:18:35Z",
        "ssh_url": "git@github.com:vdemedes/ronin.git",
        "clone_url": "https://github.com/vdemedes/ronin.git",
        "homepage": "http://vdemedes.github.io/ronin",
        "stargazers_count": 161,
        "watchers_count": 161,
        "language": "JavaScript",
        "forks": 1,
        "open_issues": 0,
        "local_name": "Ronin",
        "local_language": "Klingon",
        "local_tags": [
          "tag1",
          "tag2"
        ],
        "local_notes": "this is really cool"
      }, {
        "id": 27230478,
        "name": "ronin",
        "full_name": "vdemedes/ronin",
        "owner_login": "vdemedes",
        "owner_id": 697676,
        "owner_avatar_url": "https://avatars.githubusercontent.com/u/697676?v=3",
        "isPrivate": false,
        "html_url": "https://github.com/vdemedes/ronin",
        "description": "Toolkit for shining CLI applications",
        "fork": false,
        "created_at": "2014-11-27T15:11:57Z",
        "updated_at": "2014-12-13T01:18:35Z",
        "ssh_url": "git@github.com:vdemedes/ronin.git",
        "clone_url": "https://github.com/vdemedes/ronin.git",
        "homepage": "http://vdemedes.github.io/ronin",
        "stargazers_count": 161,
        "watchers_count": 161,
        "language": "JavaScript",
        "forks": 1,
        "open_issues": 0,
        "local_name": "Ronin",
        "local_language": "Klingon",
        "local_tags": [
          "tag1",
          "tag2"
        ],
        "local_notes": "this is really cool"
      }]
    }
  })
});
// End Logic