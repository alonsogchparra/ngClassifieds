/**
 * Created by parra on 12/21/16.
 */
angular
    .module("ngClassifieds", ["ngMaterial"])
    .config(function ($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');

    })
    .directive("helloWorld", function () {
        return {
            template: "<h1>{{ message }}</h1>"
        }

    });