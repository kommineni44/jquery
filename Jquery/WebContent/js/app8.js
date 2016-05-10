var app8=angular.module('app8',["ngSanitize"]);


app8.service('HelloService',function(){
	
	this.helloService=function(){
		
		console.log("Hello Service");
	};
	
	
});	


app8.factory('HelloFactory',function(){
	
	var factory={};
	
	factory.helloFactory=function(){
		
		console.log("Hello Factory");
	};
	
	return factory;
});

app8.controller('mainCtrl',function(HelloService,HelloFactory){
	
	HelloService.helloService();
	
	HelloFactory.helloFactory();
	
});


app8.controller('serviceControl',function($scope,$window,$location,$interval,$log,$exceptionHandler,$sanitize){
	
	
	$scope.greetUser=function(userName){
		
		$window.alert("Hello " + userName);
		
	};
	
	$scope.currentURL=$location.absUrl();
	$scope.theProtocol=$location.protocol();
	$scope.currHost=$location.host();
	$scope.currPort=$location.port();
	$location.path("#/the/path");
	$scope.currPath=$location.path();
	$location.search("random=stuff");
	$scope.currSearch=$location.search();
	
	
	$interval(function(){
		
		var hour= new Date().getHours();
		var minute=('0'+ new Date().getMinutes()).slice(-2);
		var second=('0'+ new Date().getSeconds()).slice(-2);
		
		$scope.time= hour + minute+ second;
		
	},2000);
	
	
	$scope.$log=$log;
	
	$scope.throwException= function(){
		
		try{
			
			throw new Error("Excepiton thrown");
		}catch( e){
			$exceptionHandler(e.message,"caught Exception");
		}
		
		
	};
	
	
	$scope.badStuff="";
	
});


















	
	
