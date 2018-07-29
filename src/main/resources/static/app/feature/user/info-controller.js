(function() {

    var InfoController =  function(userService, $stateParams, $log) {
        
    	var vm = this;
    	
    	vm.test = "this is a test";
    	
    	function init()
    	{	
    		var userId = $stateParams.obj
    		console.log("This is the value of userId" + userId);
    		userService.getUser(userId).then(function (results) {
               	vm.user = results;
               	$log.log("In the user controller the value of the result promise is ");
            	$log.log(JSON.stringify(vm.user));
                }, function (error) {
                    vm.error = true;
                    vm.errorMessage = error;
                });
    	}
         
         init();
    	
    };

    angular.module('userApp').controller('infoController', ['userService', '$stateParams', '$log', InfoController]);
}());