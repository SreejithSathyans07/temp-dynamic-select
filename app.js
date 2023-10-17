var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function($scope){
    $scope.metaData = [
        {id: 1,name: 'Raghu', adult: true, limit:500},
        {id: 2,name: 'Rani', adult: true, limit:500},
        {id: 3,name: 'Gowri', adult: true, limit:300},
        {id: 4,name: 'Rajesh', adult: true, limit:300},
    ]

    $scope.setFirstPerson = function(){
        return $scope.metaData[0]
    }
     
    $scope.selectedName;

    $scope.textBoxData = [$scope.setFirstPerson()];

    $scope.addPerson = function(){
        const newPerson = {id:5, name:'', adult: true, limit: 500}
        $scope.textBoxData.push(newPerson);
    }

    $scope.updateData = function(index){
        const selectedPerson = $scope.getSelectedPerson(index);
        $scope.populateLimit(index, selectedPerson);
        console.log(selectedPerson)
    }

    $scope.getSelectedPerson = function(indexNum){
        const row = document.querySelector(`.select__${indexNum}`);
        const index = row.options.selectedIndex;
        const selectedPerson = $scope.metaData[index];
        return selectedPerson;
    }

    $scope.populateLimit = function(indexNum, selectedPerson){
        let limit = document.querySelector(`.limit__value__${indexNum}`);
        limit.value = selectedPerson.limit;
    }

    $scope.inputChanged = function(index){
        const maxVal = +document.querySelector(`.limit__value__${index}`).value;
        let valueEntered = +document.querySelector(`.limit__${index}`).value;
        if(valueEntered > maxVal){
            document.querySelector(`.limit__${index}`).value = '';
            valueEntered = 0;
        }
        const remainingAmount = maxVal - valueEntered;
        console.log(remainingAmount);
        document.querySelector(`.limit__remaining__${index}`).innerHTML = 'remaining amount :' + remainingAmount + '/' + maxVal;

    }


}])