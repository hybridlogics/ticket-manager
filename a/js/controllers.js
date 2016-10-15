var ticketControllers = angular.module('ticketControllers', []);

//Ticket Admin
ticketControllers.controller('AdminCtrl', ['$scope', 'TicketService', 'BlogService', '$uibModal',
function ($scope, TicketService, BlogService, $uibModal) {

        $scope.items = {};

        $scope.animationsEnabled = true;

        $scope.details = function (data) {
            $scope.items = data;
        };

        $scope.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

        };

        $scope.titleShow = true;
        $scope.taglineShow = true;
        var date = new Date();
        $scope.updateTime = date.getTime();
        $scope.statuses = [
            {
                value: 'Open',
                text: 'Open'
            },
            {
                value: 'Closed',
                text: 'Closed'
            },
            {
                value: 'Resolved',
                text: 'Resolved'
            }
        ];

        //To retrieve json data from 'TicketService' into a variable 'ticket'
        TicketService.success(function (data) {
            $scope.ticket = data.ticket;
        });

        $scope.ticketPrintable = JSON.stringify($scope.ticket, null, 2);
        $scope.newJSON = "";

        //To save data into the json
        $scope.save = function () {
            console.log("Ticket issued!");
            if (!$scope.newJSON == "") {
                $scope.ticket = JSON.parse($scope.newJSON);
                $scope.newJSON = "";
                $scope.ticketPrintable = JSON.stringify($scope.ticket, null, 2);
            }
            for (x in $scope.ticket.issues) {
                $scope.ticket.issues[x].id = x;
                if ($scope.ticket.issues[x].$$hashKey) {
                    delete $scope.ticket.issues[x].$$hashKey
                }
            }
            $scope.ticketPrintable = JSON.stringify($scope.ticket, null, 2);
        };

        BlogService.success(function (data) {
            $scope.blog = data.blog;
        });

        $scope.bstatuses = [
            {
                value: true,
                text: 'Approve'
            },
            {
                value: false,
                text: 'Unapprove'
            }
        ];

}]);

//Ticket Client
ticketControllers.controller('TicketClientCtrl', ['$scope', 'TicketService', '$uibModal',
function ($scope, TicketService, $uibModal) {

        $scope.items = {};

        $scope.animationsEnabled = true;

        $scope.details = function (data) {
            $scope.items = data;

        };

        $scope.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

        };

        $scope.ticket = null;
        $scope.titleShow = true;
        $scope.taglineShow = true;
        var date = new Date();
        $scope.createTime = date.getTime();

        //To retrieve json data from 'TicketService' into a variable 'ticket'
        TicketService.success(function (data) {
            $scope.ticket = data.ticket;
        });

        $scope.ticketPrintable = JSON.stringify($scope.ticket, null, 2);
        $scope.newJSON = "";

        //To save data into the json
        $scope.save = function () {
            console.log("Ticket issued!");
            if (!$scope.newJSON == "") {
                $scope.ticket = JSON.parse($scope.newJSON);
                $scope.newJSON = "";
                $scope.ticketPrintable = JSON.stringify($scope.ticket, null, 2);
            }
            for (x in $scope.ticket.issues) {
                $scope.ticket.issues[x].id = x;
                if ($scope.ticket.issues[x].$$hashKey) {
                    delete $scope.ticket.issues[x].$$hashKey
                }
            }
            $scope.ticketPrintable = JSON.stringify($scope.ticket, null, 2);
        };

}]);

//Map
ticketControllers.controller('MapCtrl', ['$scope', 'CoordinateService', '$uibModal',
function ($scope, CoordinateService, $uibModal) {

        CoordinateService.success(function (data) {
            $scope.map = data.map;
            $scope.markersLenght = data.map.markers.length;
            $scope.markerCenter = data.map.center;
        });

}]);

//Text Editor
ticketControllers.controller('EditorCtrl', ['$scope', 'TextEditService', '$uibModal',
function ($scope, TextEditService, $uibModal) {

        TextEditService.success(function (data) {
            $scope.text = data.text;
        });

}]);

//Blog
ticketControllers.controller('BlogCtrl', ['$scope', 'BlogService',
function ($scope, BlogService) {

        BlogService.success(function (data) {
            $scope.blog = data.blog;
        });

}]);

//Blog Posts
ticketControllers.controller('BlogPostsCtrl', ['$scope', 'BlogService',
function ($scope, BlogService) {

        BlogService.success(function (data) {
            $scope.blog = data.blog;
        });

}]);

//Output Controller
ticketControllers.controller('TicketOutputCtrl', ['$scope', 'TicketService', 'CoordinateService', 'TextEditService', 'BlogService',
function ($scope, TicketService, CoordinateService, TextEditService, BlogService) {

        $scope.ticket = null;
        $scope.map = null;
        $scope.text = null;
        $scope.blog = null;


        //To retrieve json data from 'TicketService' into a variable 'ticket'
        TicketService.success(function (data) {
            $scope.ticket = data.ticket;
        });

        CoordinateService.success(function (data) {
            $scope.map = data.map;
        });

        TextEditService.success(function (data) {
            $scope.text = data.text;
        });

        BlogService.success(function (data) {
            $scope.blog = data.blog;
        });

}]);

ticketControllers.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
