var directivesModule = angular.module('directives', []);

directivesModule.directive('actionRow', function($compile){
    var counter = 0;
    return {

       // restrict: 'A',
        link: function($scope , element){
            element.bind("click", function(e){
                initializeAction($scope);
                var childNode = $compile('<input ng-model="action.fields[' +counter +'].name" type="text" placeholder="Enter new field name">  <select ng-model="action.fields[' + counter + '].type" ><option value="text" disabled selected>Select field type</option> <option value="text">text</option><option value="date">date</option></select> <br><br>')($scope);
                counter++;
                element.parent().prepend(childNode);
            });
            element.on('$destroy', function() {
                counter = 0;
            });
        }
    }
});

function initializeAction($scope){
    console.log($scope);
    console.log($scope.action);
    if ($scope.action == undefined) {
        $scope.action = {};
    }
    $scope.action.fields = [];
}

