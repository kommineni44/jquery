var app3=angular.module('app3',[]);

app3.controller('srini1',function($scope){
	
	
	$scope.groceries=[{item:'one',purchased:true},
	                  {item:'two',purchased:true},
	                  {item:'three',purchased:false},
	                  {item:'four',purchased:true}];
	
	
	
	$scope.addItem=function(newItem){
		
		if(!(newItem === undefined || newItem==="")){
			$scope.groceries.push({
				
				item:newItem,purchased:false
				
			});
			
			$scope.missingNewItemError="";
		}else{
			$scope.missingNewItemError="please enter an item";
		}
	}
});


app3.controller('userControl',function($scope){
	
	$scope.users=[{
		fname:"srini",
		lanme:"kommineni",
		street:"123 main",
		subscribe:true,
		delivery:"email"
	}];
	
	
	$scope.saveUser=function(userInfo){
		
		if($scope.userForm.$valid){
			$scope.users.push({
				
				fname:userInfo.fname,lname:userInfo.lname,street:userInfo.street,subscribe: userInfo.subscribe,delivery: userInfo.delivery
			});
			
			console.log("User saved");
		}else{
			console.log("error");
		}
		
	}
	
});





