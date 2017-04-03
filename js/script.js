angular.module("myApp",[])
	.controller("searchMovie",["$scope", "$http", function($scope, $http){
		$scope.getMovie = function(){
			$http.get("http://www.omdbapi.com/?s=" + $scope.movieName + "&type=movie&r=json")
			.success(function(data, status){
				$scope.details = data.Search;
				$scope.totalNum = data.totalResults;
				$scope.response = data.Response;
				angular.forEach($scope.details, function(value, key){
					console.log(value);
				})
			})
			.error(function(data, status){
				console.log("Not Found");
			})
		}
	}])
	.directive("movieSearchResults", function(){
		return {
			restrict: "EA",
			templateUrl: "template/showResults.html"
		};
	});