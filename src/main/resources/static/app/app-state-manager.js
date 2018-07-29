"use strict";

(function () {

    angular.module('userApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("users", {
                url: "/users",
                templateUrl: "app/feature/user/user.html"
        }).state("info", {
            url: "/info",
            templateUrl: "app/feature/user/info.html",
            params: {
                obj: null
            }
    })
    });
}());