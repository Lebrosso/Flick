angular.module('photoApp',['ngRoute']).config(function($httpProvider){
	  delete $httpProvider.defaults.headers.common['X-Requested-With'];
	});
	
var app = angular.module('imageViewer', ['ng', 'ngResource','ngSanitize','angular.vertilize']);

app.controller('AppGallery',[ '$scope','$http', function AppGallery($scope, $http) {
	
$scope.maxWidth = 0;	


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
	    	  elem.on('load', function() {
	    		  scope.myStyle="{'background-color':'red'}'";
                	      
                	  if(scope.maxWidth  < elem[0].naturalWidth)
                		  {
                		  
                		  console.log(elem[0].naturalWidth); 
                		 // scope.maxWidth = elem[0].naturalWidth; 
                		  scope.maxWidth = 2000;
                		  scope.width=50;
                		 // scope.width = scope.maxWidth +10;
                		  scope.bgColor = 'red';
                		  
                		  }
                		  ;
                	  
	          });
 	      }
	    };
	 });







