angular.module('newApp').
  component('newList', { 
    template:
        '<ul>' +
          '<li ng-repeat="item in $ctrl.names">' +
            '<span>{{item.name}}</span>' +
            '<p>{{item.department}}</p>' +
          '</li>' +
        '</ul>',
    controller: function newListController() {
      this.names = [
        {
          name: 'Nandana R',
          department: 'Electronics and Communications Engineering '
        }, {
          name: 'Reshma A',
          department: 'Chemical Engineering'
        }, {
          name: 'Barath R',
          department: 'Mechanical Engineering'
        }, {
            name: 'Manickam L',
            department: 'Computer Science Engineering'
          }
      ];
    }
  });