var app9=angular.module('app9',["ngSanitize"]);


app9.controller('mainControl', function($scope,$http) {
	
	$scope.getData=function(){
		
		$http.get("player.json").success(
				
				function(data){
					$scope.players=data;
				}
				
		);
	};
	
});


















	
	
