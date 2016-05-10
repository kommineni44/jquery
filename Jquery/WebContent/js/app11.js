var app11=angular.module('app11',["ngSanitize"])

.directive('bbPlayerList',function(){
	
	return  function(scope,element,attrs){
		
		var data=scope[attrs["bbPlayerList"]];
		
		if(angular.isArray(data)){
			
			var arrayItem=attrs["arrayItem"];
			var listElem=angular.element("<ul>");
			
			element.append(listElem);
			
			for(var i=0;i<data.length;i++){
				listElem.append(angular.element("<li>").text(scope.$eval(arrayItem,data[i])));
				
			}
		}
		
	};
	
})

.controller('mainControl', function($scope) {

	$scope.bbPlayers=[{"name":"George Thomas","gpa":3.5}, {"name":"susy smith","gpa":3.6},{"name":"Paul Marks","gpa":3.2}];
	
	
});