'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}', config: require('../definitions/general/static')},
  {method: 'post',   path: '/register', config: require('../definitions/users/post_register')},
  {method: 'post',   path: '/login',    config: require('../definitions/users/post_login')},
  {method: 'delete', path: '/logout',   config: require('../definitions/users/delete_logout')},
  {method: 'get',    path: '/status',   config: require('../definitions/users/get_status')},
  {method: 'post',   path: '/rooms',    config: require('../definitions/rooms/post_rooms')},
  {method: 'post',   path: '/rooms/{name}',    config: require('../definitions/rooms/post_rooms_join')},
  {method: 'get',    path: '/rooms',    config: require('../definitions/rooms/get_rooms')}
];
