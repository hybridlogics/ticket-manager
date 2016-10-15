var ticketApp = angular.module('ticketApp', [
    'ngRoute',
    'ticketControllers',
    'ticketServices',
    'ticketFilters',
    'xeditable',
    'textAngular',
    'ui.bootstrap',
    'uiGmapgoogle-maps'
]);

ticketApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/admin', {
        templateUrl: 'a/partials/admin.html',
        controller: 'AdminCtrl'
    }).
    when('/client', {
        templateUrl: 'a/partials/ticketclient.html',
        controller: 'TicketClientCtrl'
    }).
    when('/output', {
        templateUrl: 'a/partials/output.html',
        controller: 'TicketOutputCtrl'
    }).
    when('/map', {
        templateUrl: 'a/partials/map.html',
        controller: 'MapCtrl'
    }).
    when('/editor', {
        templateUrl: 'a/partials/editor.html',
        controller: 'EditorCtrl'
    }).
    when('/blog', {
        templateUrl: 'a/partials/blog.html',
        controller: 'BlogCtrl'
    }).
    when('/blogPosts', {
        templateUrl: 'a/partials/blogposts.html',
        controller: 'BlogPostsCtrl'
    }).
    otherwise({
        redirectTo: '/admin'
    });

}]);

//Required to set theme for xeditable
ticketApp.run(function (editableOptions) {
    editableOptions.theme = 'bs3';
});
