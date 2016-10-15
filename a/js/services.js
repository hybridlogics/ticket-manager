var ticketServices = angular.module('ticketServices', ['ngResource']);

//To GET the json file using $http
ticketServices.factory('TicketService', ['$http',
  function ($http) {
        return $http.get('/data/ticket.json');
  }]);

//To GET the json file using $http
ticketServices.factory('CoordinateService', ['$http',
  function ($http) {
        return $http.get('/data/coordinates.json');
  }]);

//To GET the json file using $http
ticketServices.factory('TextEditService', ['$http',
  function ($http) {
        return $http.get('/data/textedit.json');
  }]);

//To GET the json file using $http
ticketServices.factory('BlogService', ['$http',
  function ($http) {
        return $http.get('/data/blog.json');
  }]);
