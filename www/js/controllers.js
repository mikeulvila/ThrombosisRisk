angular.module('starter.controllers', [])

.controller('TabCtrl', function ($scope) {
   $scope.title = 'Tab Control'
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {

  $scope.riskOnePoint = [
    { question: "Age 41-60 years", answer: false },
    { question: "Minor surgery planned", answer: false },
    { question: "History of prior major surgery (< 1 month)", answer: false },
    { question: "Vericose veins", answer: false },
    { question: "History of inflammatory bowel disease", answer: false },
    { question: "Swollen legs (current)", answer: false },
    { question: "Obesity (BMI > 25)", answer: false },
    { question: "Acute myocardial infarction", answer: false },
    { question: "Congestive heart failure (< 1 month)", answer: false },
    { question: "Sepsis (< 1 month)", answer: false },
    { question: "Serious lung disease incl. pneumonia (< 1 month)", answer: false },
    { question: "Abnormal pulmonary function (COPD)", answer: false },
    { question: "Medical patient currently at bed rest", answer: false },
    { question: "Other risk factors", answer: false }
  ];

  $scope.settings = {
    enableFriends: true
  };


});
