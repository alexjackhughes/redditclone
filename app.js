var app = angular.module('flapperNews', []);

app.factory('posts', [function() {
    var o = {
        // Sets a default post
        posts: [{title: 'Wow, this is a great website', link:'http://alexjackhughes.com', upvotes: 100}]
    };
    return o;
}])

app.controller('MainCtrl', [
'$scope',
'posts',

// Logic of creating posts:
function($scope, posts){
  $scope.test = 'Reddit Clone - Powered by Alexander Jack Hughes'; // Title of app

  $scope.posts = posts.posts;

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
