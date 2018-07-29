"use strict";

(function () {

    
    function UserService (userDal) {

        this.getUsers = function()
        {
        	return userDal.getUsers();
        };
        
        this.getUser = function(userId)
        {
        	return userDal.getUser(userId);
        };
        
    }
    
    angular.module("userApp").service("userService", ['userDal', UserService]);

}());