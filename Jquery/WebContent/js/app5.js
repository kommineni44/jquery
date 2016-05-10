var app5=angular.module('app5',[]);


	
app5.controller('main1',function(){
	this.name="Animal";
	this.sound="Grrr";
	
	this.animalClick=function(){
		
		alert(this.name +" says " + this.sound) ;
	};
	
});

app5.controller("dogCtrl",function($controller){
	
	var childCtrl=this;
	
	childCtrl.child=$controller('main1',{});
	
	childCtrl.child.name="dog";
	childCtrl.child.bark="woof";
	
	childCtrl.child.dogData=function(){
		
		alert(this.name+" says "+this.sound+" and "+this.bark);
	};
	
});





