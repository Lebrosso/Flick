angular.module('photoApp',['ngRoute']).config(function($httpProvider){
	  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
	
var app = angular.module('imageViewer', ['ng', 'ngResource','ngSanitize','angular.vertilize']);


app.provider({
	
	$exceptionHandler: function(){
    var handler = function(exception, cause) {
        alert(exception);  
    };

    this.$get = function() {
        return handler;
    };
}
});  

app.controller('AppGallery',[ '$scope','$http','$exceptionHandler', function AppGallery($scope,$http,$exceptionHandler){
	
$scope.maxWidth = 0;	
$scope.$emit('LOAD');
$http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json').success(function(data){
$scope.$emit('UNLOAD'); 
});
	
	jsonFlickrFeed = function(data){
	$scope.data = data.items;
	}

}]);

app.controller('loadController',[ '$scope','$http', function($scope, $http) {
	
	$scope.$on('LOAD',function(){$scope.loading=true});
	$scope.$on('UNLOAD',function(){$scope.loading=false});
	
	}]);









