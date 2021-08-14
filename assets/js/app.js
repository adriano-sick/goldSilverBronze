// Adriano Siqueira - 8/13/2021 - Gold, Silver and Bronze

var app = angular.module("RankingLeadersApp", []);

app.controller("RankController", function($scope) {

    $scope.showGold   = false;
    $scope.showSilver = false;
    $scope.showBronze = false;

    $scope.toggleGold = function() {
        $scope.showGold = !$scope.showGold;
    } 

    $scope.toggleSilver = function() {
        $scope.showSilver = !$scope.showSilver;
    }

    $scope.toggleBronze = function() {
        $scope.showBronze = !$scope.showBronze;
    } 

    $scope.leaders = [
        { "pic" : "./assets/img/cleopatra.webp",    "rank" : 2, "alt" : "Cleopatra"},
        { "pic" : "./assets/img/genghiskhan.webp",  "rank" : 3, "alt" : "Genghis Khan"},
        { "pic" : "./assets/img/ghandi.webp",       "rank" : 2, "alt" : "Ghandi"},
        { "pic" : "./assets/img/montezuma.webp",    "rank" : 1, "alt" : "Montezuma"},
        { "pic" : "./assets/img/pachacuti.webp",    "rank" : 3, "alt" : "Pachacuti"},
        { "pic" : "./assets/img/pedro2.webp",       "rank" : 1, "alt" : "Dom Pedro II"},
        { "pic" : "./assets/img/roosevelt.webp",    "rank" : 3, "alt" : "Teddy Roosevelt"},
        { "pic" : "./assets/img/saladin.webp",      "rank" : 1, "alt" : "Saladin"},
        { "pic" : "./assets/img/victoria.webp",     "rank" : 2, "alt" : "Victoria Queen"}
    ];

});