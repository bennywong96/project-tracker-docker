"use strict";

(function () {

    function UserDal (dal) {

        this.getUsers = function () {
            return dal.http.GET("user/getAllUsers");
        };
        
        this.getUser = function (userId) {
            return dal.http.GET("user/getUser/" + userId);
        };

        this.saveUser = function (userToSave) {
            return dal.http.POST("rest/user/json", userToSave);
        };

        this.updateUser = function (userToUpdate) {
            return dal.http.PUT("rest/user/json/", userToUpdate);
        };

        this.deleteUser = function (userToDelete) {
            return dal.http.DELETE("/rest/user/json/", userToDelete);
        };
    }
    
    angular.module("userApp").service("userDal", ["dal", UserDal]);
}());