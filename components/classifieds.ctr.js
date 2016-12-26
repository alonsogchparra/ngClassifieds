(function () {

    "use strict"

    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function ($scope) {

            $scope.classified = {
                title: "First Item",
                price: "$1,000,000",
                description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aspernatur commodi consequatur consequuntur culpa id, illum incidunt ipsum iusto minima mollitia nisi optio perferendis placeat quas similique voluptas. Placeat?"
            }

        });
})();