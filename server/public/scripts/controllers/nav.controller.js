myApp.controller('NavController', function(UserService) {
  console.log('NavController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  console.log(vm.userObject);
});
