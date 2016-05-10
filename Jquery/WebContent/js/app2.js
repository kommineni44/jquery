var app2=angular.module('app2',[]);

app2.controller('srini',function($scope){
	
	
	$scope.randomNum1=Math.floor(Math.random() * 10 + 1);
	
	$scope.randomNum2=Math.floor(Math.random() * 10 + 1);
});


app2.controller('badmood',function($scope){
	
	var moods=['frustrated','let down','tired','angry'];
	
	$scope.bad = moods[Math.floor(Math.random() * 4)];
	
});


app2.controller('goodmood',function($scope){
	
	var moods=['happy','elated','joy','bissful'];
	
	$scope.bad = moods[Math.floor(Math.random() * 4)];
	
});


app2.controller('gList',function($scope){
	
	$scope.groceries=[{item:'one',purchased:true},
	                  {item:'two',purchased:true},
	                  {item:'three',purchased:false},
	                  {item:'four',purchased:true}];
	
});




