var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',

// Logic of creating posts:
function($scope){
  $scope.test = 'Reddit Clone - Powered by Alexander Jack Hughes'; // Title of app

  $scope.posts = [ // List of default posts
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
    ];

    // function for creating posts
    $scope.addPost = function(){
        if(!$scope.title || $scope.title === '') { return; } // Disallows blank posts
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0
        });
        $scope.title='';
        $scope.link='';
    };

    // function for upvoting posts
    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    }
}]);
