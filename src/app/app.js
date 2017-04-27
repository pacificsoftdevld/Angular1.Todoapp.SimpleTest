import angular from 'angular';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($scope, $timeout) {
    this.$scope = $scope
    this.url = 'https://github.com/preboot/angular-webpack';
    this.$scope.inputText=''
    this.$scope.todoList = []
    // this.$scope.inputChangeCheckbox = false
    this.addTodo = () => {
      this.$scope.todoList.push({text:this.$scope.inputText, checked: false, done: false})
      this.$scope.inputText = ''
      console.debug( this.$scope.todoList)
    }
    this.deleteItem = index => {
      this.$scope.todoList.splice(index, 1)
    }

    this.checkboxChange = () => {
      this.$scope.todoList = this.$scope.todoList.map(item => {
        item.checked = this.$scope.inputChangeCheckbox
        return item
      })
    }

    this.deleleChecked = () => {
      this.$scope.todoList = this.$scope.todoList.filter( item => {
        return !item.checked
      })
    }

    this.doneChecked = () => {
        this.$scope.todoList = this.$scope.todoList.map( item => {
          item.done = true
          return item
      })
    }

  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;