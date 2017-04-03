angular.module("myApp",[])
	.controller("searchMovie",["$scope", "$http", function($scope, $http){
		$scope.getMovie = function(){
			$http.get("http://www.omdbapi.com/?s=" + $scope.movieName + "&type=movie&r=json")
			.success(function(data, status){
				var details = data.Search;
				var totalNum = data.totalResults;
				var response = data.Response;
				angular.forEach(details, function(value, key){
					
				})
			})
			.error(function(data, status){
				console.log("Not Found");
			})
		}
		
	}])