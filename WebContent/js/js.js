angular.module('photoApp',['ngRoute']).config(function($httpProvider){
	  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
	
var app = angular.module('imageViewer', ['ng', 'ngResource','ngSanitize','angular.vertilize']);

app.controller('AppGallery',[ '$scope','$http', function AppGallery($scope, $http) {
	
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




angular.module('scroll', []).directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];
        
        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
});


app.directive('lightboxResizeImage', function($timeout) {
	  return {
	      restrict: 'A',
	      link: function(scope, elem, attrs) {
	    	  elem.on('load', function() {
	    		
                	  if(scope.maxWidth  < elem[0].naturalWidth)
                		  {
                	
                		  scope.maxWidth = 2000;
                		  scope.width=50;
                		  scope.bgColor = 'red';
                		  
                		  }
                		  ;
                	  
	          });
 	      }
	    };
	 });







