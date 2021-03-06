angular.module('starter', ['ionic',
                          'ui.router',
                          'starter.controllers',
                          'menuService',
                          'auth',
                          'authService',
                          'myPets',
                          'myPetsService',
                          'app.pet',
                          'app.octo',
                          'octo.service',
                          'app.dragon',
                          'dragon.service',
                          'app.bankAuth',
                          'app.firstPet',
                          'app.store',
                          'store.service',
                          'app.account',
                          'app.adoptPet',
                          'editPet',
                          'bankAuth.service',
                          'account.service',
                          'editPetService',
                          'adoptPet.service',
                          'pet.service',
                          'firstPetService'])


.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'pages/menu/menu.html',
    controller: 'AppCtrl',
  })

  .state('market', {
    url: '/market',
    templateUrl: 'pages/menu/marketmenu.html',
    controller: 'AppCtrl',
  })

  .state('market.pet', {
    url: '/pet',
    views: {
      'menuContent': {
        templateUrl: 'pages/petPages/pet.html',
        controller: 'PetCtrl',
      },
    },
  })

  .state('market.octopus', {
    url: '/octopus',
    views: {
      'menuContent': {
        templateUrl: 'pages/octopus/octopus.html',
        controller: 'OctoCtrl',
      },
    },
  })

  .state('market.dragon', {
    url: '/dragon',
    views: {
      'menuContent': {
        templateUrl: 'pages/dragon/dragon.html',
        controller: 'DragonCtrl',
      },
    },
  })

  .state('firstPet', {
    url: '/firstPet',
    templateUrl: 'pages/firstPet/firstPet.html',
    controller: 'FirstPetCtrl',
  })

  .state('app.adoptPet', {
    url: '/adoptPet',
    views: {
      'menuContent': {
        templateUrl: 'pages/adoptPet/adoptPet.html',
        controller: 'adoptPetCtrl',
      },
    },
  })

  .state('app.store', {
    url: '/store',
    views: {
      'menuContent': {
        templateUrl: 'pages/petStore/store.html',
        controller: 'StoreCtrl',
      },
    },
  })

    .state('app.account', {
      url: '/account',
      views: {
        'menuContent': {
          templateUrl: 'pages/accounts/account.html',
          controller: 'accountController',
        },
      },
    })

  .state('app.editPet', {
    url: '/editPet',
    views: {
      'menuContent': {
        templateUrl: 'pages/editPet/editPet.html',
        controller: 'editPetController',
      },
    },
  })

  .state('app.myPets', {
    url: '/myPets',
    views: {
      'menuContent': {
        templateUrl: 'pages/myPets/myPets.html',
        controller: 'MyPetsCtrl',
      },
    },
  })

  .state('login', {
    url: '/login',
    templateUrl: 'pages/userAuth/login.html',
    controller: 'AuthController',
  })

  .state('bankAuth', {
    url: '/bankAuth',
    templateUrl: 'pages/bankAuth/bankAuth.html',
    controller: 'BankCtrl',
  })

  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'pages/contact/contact.html',
        // controller
      },
    },
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'pages/userAuth/signup.html',
    controller: 'AuthController',
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
