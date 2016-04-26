angular.module('starter.controllers', ['ui.bootstrap'])

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

  $scope.max = 5;
  $scope.dynamic = 0;

  $scope.riskOnePoint = [
    { question: "Age 41-60 years", answer: 0 },
    { question: "Minor surgery planned", answer: 0 },
    { question: "History of prior major surgery (< 1 month)", answer: 0 },
    { question: "Vericose veins", answer: 0 },
    { question: "History of inflammatory bowel disease", answer: 0 },
    { question: "Swollen legs (current)", answer: 0 },
    { question: "Obesity (BMI > 25)", answer: 0 },
    { question: "Acute myocardial infarction", answer: 0 },
    { question: "Congestive heart failure (< 1 month)", answer: 0 },
    { question: "Sepsis (< 1 month)", answer: 0 },
    { question: "Serious lung disease incl. pneumonia (< 1 month)", answer: 0 },
    { question: "Abnormal pulmonary function (COPD)", answer: 0 },
    { question: "Medical patient currently at bed rest", answer: 0 },
    { question: "Other risk factors", answer: 0 }
  ];

  $scope.setValue = function () {
    $scope.dynamic = $scope.riskOnePoint
  }



});
