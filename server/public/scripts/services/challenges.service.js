myApp.factory('ChallengesService', function($http, $location) {
  console.log('ChallengesService Loaded');

 var challengesService = {

   challenges: [],

   getChallenges: function() {
      console.log('get challenges');
      $http.get('/challenges').then(function(response) {
        var startDate = Date.parse(response.data[0].start_date)
        console.log('startDate: ', startDate);
        console.log('response.data[0].start_date: ', response.data[0].start_date);
        console.log(response);
        challengesService.challenges = response.data;
      });
    }, // end getChallenges


   addChallenge: function(newChallenge) {
      console.log(newChallenge);
      $http.post('/challenges', newChallenge).then(function(response) {
        console.log(response);
        challengesService.getChallenges();
      });
    }, // end addChallenge


   updateChallenge: function(challenge) {
      console.log('update challenge');
      console.log(challenge);
      $http.put('/challenges', challenge).then(function(response) {
        challengesService.getChallenges();
        console.log(response);
      });
    }, // end updateChallenge


   deleteChallenge: function(challenge) {
      console.log('deleteChallenge');
      console.log(challenge);
      $http.delete('/challenges/' + challenge.id).then(function(response) {
        console.log(response);
        challengesService.getChallenges();
      });
    } // end deleteChallenge
  };

 return challengesService;

}); // end challenges service
