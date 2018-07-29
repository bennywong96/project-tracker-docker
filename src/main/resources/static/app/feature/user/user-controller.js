"use strict";

(function() {

    var UserController =  function(userService, $log, $state) {
        
    	var vm = this;
        
        vm.isHidden = false;
        vm.accountString = "Hide Users";
        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        	
        	if(vm.isHidden)
        	{
        		vm.accountString = "Show Users";
        	}
        	else
        	{
        		vm.accountString = "Hide Users";
        	}
        };

        vm.changeState = function(userId)
        {
            console.log("This is the value of userId " + userId);
            var paramObj = {obj:userId};
        	$state.go('info', paramObj);
        };
        
        function init() {
        	userService.getUsers().then(function (results) {
           	vm.users = results;
           	$log.log("In the user controller the value of the result promise is ");
        	$log.log(JSON.stringify(vm.users));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
       }
       
       init();
            
    };

    angular.module('userApp').controller('userController', ['userService','$log','$state', UserController]);
}());