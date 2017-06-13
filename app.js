var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
    'scope', function($scope){
        $scope.test = "Hello World!";

        $scope.posts = [
            {title: 'post 1', upvotes: 5},
            {title: 'post 2', upvotes: 10},
            {title: 'post 3', upvotes: 3},
            {title: 'post 4', upvotes: 9},
            {title: 'post 5', upvotes: 12}
        ];

        $scope.addPost = function() {
            $scope.post.push(title: 'A New Post!', upvotes: 4);
        }
    }]);
