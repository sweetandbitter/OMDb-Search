angular.module("myApp",[])
	.controller("searchMovie",["$scope", "$http", function($scope, $http){
		$http.get("http://www.omdbapi.com/?s=ghost")
			.success(function(data, status){
				console.log(data);
			})
	}])