angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.labDataverse', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/labDataverse.html',
        controller: 'labDataverseCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.message', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/message.html',
        controller: 'messageCtrl'
      }
    }
  })

  .state('menu.hours', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hours.html',
        controller: 'hoursCtrl'
      }
    }
  })

  .state('menu.signup', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('menu.availability', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/availability.html',
        controller: 'availabilityCtrl'
      }
    }
  })

  .state('menu.profile', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('menu.login', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.activity', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/activity.html',
        controller: 'activityCtrl'
      }
    }
  })

  .state('availability1', {
    url: '/page11',
    templateUrl: 'templates/availability1.html',
    controller: 'availability1Ctrl'
  })

  .state('menu.reviewImage', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reviewImage.html',
        controller: 'reviewImageCtrl'
      }
    }
  })

  .state('menu.reviewDocumentation', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reviewDocumentation.html',
        controller: 'reviewDocumentationCtrl'
      }
    }
  })

  .state('menu.labDataverse2', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/labDataverse2.html',
        controller: 'labDataverse2Ctrl'
      }
    }
  })

  .state('menu.quickUploader', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quickUploader.html',
        controller: 'quickUploaderCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});