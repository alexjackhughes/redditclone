var app = angular.module('flapperNews', ['ui.router']);

// Configuring the home state and routes
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home.html',
                controller: 'MainCtrl'
        })

        .state('posts', {
            url: '/posts/{id}',
            templateUrl: '/posts.html',
            controller: 'PostsCtrl'
        });

        $urlRouterProvider.otherwise('home');
    }
])

// Creating the posts and their functionality
app.factory('posts', [function() {
    var o = {
        // Sets a default post
        posts: []
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
            upvotes: 0,
            comments: [
                {author: 'Joe', body: 'Great Job!', upvotes: 0},
                {author: 'Sam', body: 'I hate it!', upvotes: 0}
            ]
        });
        $scope.title='';
        $scope.link='';
    };

    // function for upvoting posts
    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    }
}])

app.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts) {
        $scope.posts = posts.post[$stateParams.id];

        $scope.addComment = function(){
            if($scope.body === '') { return; }
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body = '';
        }
}]);
