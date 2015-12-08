angular.module('photoApp',['ngRoute']).config(function($httpProvider){
	  delete $httpProvider.defaults.headers.common['X-Requested-With'];
	});
	
	
	
var app = angular.module('imageViewer', ['ng', 'ngResource','ngSanitize']);

app.controller('AppGallery',[ '$scope','$http', function AppGallery($scope, $http) {
$http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json').success(function (data) {
  
});
	
	jsonFlickrFeed = function(data){
	$scope.data = data.items;

	}
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
	    	  $timeout(function() {
                  
                	  console.log(elem[0].naturalWidth);                     
                  
              },0);

	      }
	  }
	    });




