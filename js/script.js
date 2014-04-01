var app = angular.module('box',[]);

app.controller('boxCtrl',function($scope){
  
  
  //$scope.items=[true,false,null,0,undefined,1];

  $scope.items1=[true,false,"true","false",1,-1,1/0,-1/0,undefined,0,null,"a","",[],{},[[]],[0],[1],[-1],NaN,[NaN]];  
  $scope.items2=[true,false,"true","false",1,-1,1/0,-1/0,undefined,0,null,"a","",[],{},[[]],[0],[1],[-1],NaN,[NaN]]; 
  
  
  $scope.descr=["true","false","\"true\"","\"false\"","1","-1","1/0","-1/0","undef.","0","null","a","\"\"","[]","{}","[[]]","[0]","[1]","[-1]","NaN","[NaN]"];
  
  $scope.draw = function(num){
   $scope.operator=num;
     
  }
  
  });
