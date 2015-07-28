
angular.module('MyApp')

.controller('AppCtrl', function($scope, $http) {

  var GET = {};
  var query = window.location.search.substring(1).split("&");
  for (var i = 0, max = query.length; i < max; i++)
  {
      if (query[i] === "") // check for trailing & with no param
          continue;

      var param = query[i].split("=");
      GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
  }

$scope.init = function(){
  if(_.has(GET, "onload")){
    if(GET.onload == "true"){
    var uri = GET.uri;
         $http({
           url: uri,
           method: "POST"
         });
       }
  }
}


  $scope.go = function() {
    var postData = {};
    var uri = GET.uri;

         $http({
           url: uri,
           method: "POST",
           data: postData
         });

     }




});
