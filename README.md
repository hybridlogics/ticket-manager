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


### Admin: ###

![alt tag](https://cloud.githubusercontent.com/assets/21244627/19411209/a84965f8-9316-11e6-9990-eba9a3f2b9e0.png)


### Admin (View Issue): ###

![alt tag](https://cloud.githubusercontent.com/assets/21244627/19411210/a84be346-9316-11e6-830a-dbb5fa29b15f.png)


### Client: ###

![alt tag](https://cloud.githubusercontent.com/assets/21244627/19411211/a8507654-9316-11e6-82fa-2e6c2f74a0b0.png)


### Map: ###

![alt tag](https://cloud.githubusercontent.com/assets/21244627/19411214/a8584aaa-9316-11e6-8520-1ae4aafe5fe1.png)


### Text Editor: ###

![alt tag](https://cloud.githubusercontent.com/assets/21244627/19411212/a8525b36-9316-11e6-92ab-210505592a0f.png)


### Blog (CRUD): ###

![alt tag](https://cloud.githubusercontent.com/assets/21244627/19411213/a857a83e-9316-11e6-8f19-f64069919290.png)


### Blog Posts: ###

![alt tag](https://cloud.githubusercontent.com/assets/21244627/19411215/a8845a14-9316-11e6-93a8-d7f817e24a3c.png)