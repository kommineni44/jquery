var app4=angular.module('app4',[]);

app4.controller("heroCtrl", function($scope,$rootScope) {
	
	$scope.hero=[{"realName":"Bruce Wayne","heroName":"batman"},
	             {"realName":"Clark Kent","heroName":"Super Man"}
	             
    ];
	
	$scope.getHeroData=function(){
		
		heroSearch($scope.heroName);
	};
	
	function heroSearch(name){
		$scope.heroData="Not Found";
		
		for(var i=0;i < $scope.hero.length ;i++){
			
			if($scope.hero[i].heroName===name){
				$scope.heroData=$scope.hero[i].realName+ " "+$scope.hero[i].heroName;
			}
			
		}
	}
	
	$scope.$on("heroupdated",function(event,arguments){
		
		$scope.hero.push({realName:arguments.realName,heroName:arguments.heroName});
	});
	
	$scope.addHeroData= function(heroName,realName){
		
		$rootScope.$broadcast("heroupdated",
		{
			realName:realName,heroName:heroName
			
		}	);
		
	};
	
});





