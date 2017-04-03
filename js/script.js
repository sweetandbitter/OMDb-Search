angular.module("myApp",[])
	.controller("searchMovie",["$scope", "$http", function($scope, $http){
		$scope.showDetails = true;
		$scope.getMovie = function(){
			$http.get("http://www.omdbapi.com/?s=" + $scope.movieName + "&type=movie&r=json")
			.success(function(data, status){
				$scope.movies = data.Search;
				$scope.totalNum = data.totalResults;
				$scope.response = data.Response;
				/*angular.forEach($scope.details, function(value, key){
					console.log(value);
				})*/
				$scope.error = data.Error;
				$scope.showDetails = true;
			})
			.error(function(data, status){
				alert("Error, Can not get resource.");
			})
		}
		$scope.showMovieDetails = function(movie){
			$http.get('https://www.omdbapi.com/?i=' + movie.imdbID + '&plot=full&r=json&tomatoes=true')
				.success(function(data, statuse){
					$scope.moviedetail = data;
					$scope.showDetails = !$scope.showDetails;
					console.log($scope.moviedetail);
				})
		}
	}])
	.directive("movieSearchResults", function(){
		return {
			restrict: "EA",
			templateUrl: "template/showResults.html"
		};
	});