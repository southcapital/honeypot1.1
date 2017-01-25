angular.module('app.store', [])

.controller('StoreCtrl', function($scope, $rootScope, $http , $location) {
  console.log($scope, 'heres scope in app store ctrl')
  $scope.test = 'Hello!'
  $scope.transaction;

  $scope.food = [
    { id: 1, name: 'Berries', type: 'food', cost: '1', effect: '1', img: './img/berries.png'},
    { id: 2, name: 'Salmon', type: 'food', cost: '2', effect: '2', img: '/img/salmon.png'},
    { id: 3, name: 'Honey!', type: 'food', cost: '3', effect: '3', img: '/img/honey_pot.png'}
  ]

  $scope.buyFood = function() {

    $scope.transaction = {
      user_id: $rootScope.user,
      pet_id: $rootScope.pet.id,
      item_id: this.food.id,
      amount: this.food.cost
    }

    console.log($scope.transaction, 'heres transaction')

    $http.post('http://localhost:3000/v1/transactions', $scope.transaction)
      .then(function(res){
        $location.path('/market/pet')

      }, function(error){
        console.log(error);
      })
  }

})


// $scope.color = function() {
//   let color = '#';
//   let hexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', '1', '2', '3', '4', '5', '6']
//   for(let i = 0; i < 6;i++){
//     let string = hexes[Math.floor(Math.random() * hexes.length)];
//     console.log(string)
//     color += string;
//   }
//   return color;
// }
