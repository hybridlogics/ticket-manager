# TicketManager
"TicketManager" is a multipurpose ticket/issue management application.


## INSTRUCTIONS: ##

Use npm package "liver-server" or any equivalent server to run the application.


## FEATURES: ##

1- Admin page.

   -Ticket view and comments section.

   -Blog control.

2- Client page.

   -Ticket create.

3- Map page.

   -Add markers.

   -View markers.

4- Text Editor page.

5- Create and Delete Blog Post.
   
6- View Blog Posts


## TECHNOLOGIES: ##

- HTML 5

- Bootstrap 3+

- AngularJs

- UI-Modules

- TextAngular

- xeditable


## CODE SNIPPETS: ##

1- Map Controller:-

        storeApp.config(['$routeProvider', function ($routeProvider) {

        ticketControllers.controller('MapCtrl', ['$scope', 'CoordinateService', '$uibModal',
        function ($scope, CoordinateService, $uibModal) {

                CoordinateService.success(function (data) {
                    $scope.map = data.map;
                    $scope.markersLenght = data.map.markers.length;
                    $scope.markerCenter = data.map.center;
                });

        }]);