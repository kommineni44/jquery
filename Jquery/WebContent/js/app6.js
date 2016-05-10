var app6=angular.module('app6',[]);


	
app6.controller("mainCtrl",function($scope){

	$scope.students=[
	      
       {name:"George Thomas",gpa:3.5},
       {name:"susy smith",gpa:3.6},
       {name:"Paul Marks",gpa:3.2}
	];
	
	$scope.student={gpas:[
	       	      
	                 {name:"George Thomas",gpa:3.5},
	                 {name:"susy smith",gpa:3.6},
	                 {name:"Paul Marks",gpa:3.2}
	          	]};
	
	
});


