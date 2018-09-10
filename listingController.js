angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {

      $scope.listings.push({
        code: $scope.newEntry.code,
        name: $scope.newEntry.name,
        coordinates: {
          latitude: $scope.newEntry.coordinates.latitude,
          longitude: $scope.newEntry.coordinates.latitude,
        },
        address: $scope.newEntry.address,
        available: true
      })
      $scope.newEntry.code ="";
      $scope.newEntry.name ="";
      $scope.newEntry.coordinates = "";
      $scope.newEntry.address = "";
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = Listings[index];
    };
  }
]);
