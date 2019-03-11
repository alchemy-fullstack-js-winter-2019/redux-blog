import Home from '../containers/home/Home';
import AllUsers from '../containers/users/AllUsers';
import UserContainer from '../containers/users/UserContainer';
import AllComments from '../containers/comments/AllComments';
import PostContainer from '../containers/posts/PostContainer';
import PostsSearch from '../components/posts/PostsSearch';

export const ROUTES = {
  HOME:{
    path:'/',
    Component: Home,
    linkTo:() => '/'
  },
  ALL_USERS:{
    path:'/users',
    Component: AllUsers,
    linkTo: () => '/users'
  },
  ALL_POSTS:{
    path:'/posts',
    Component: PostsSearch,
    linkTo: () => '/posts'
  },
  USER_CONTAINER:{
    path:'/users/:id',
    Component: UserContainer,
    linkTo: (id) => `/users/${id}`
  },
  ALL_COMMENTS:{
    path:'/comments',
    Component: AllComments,
    linkTo:() => '/comments'
  },
  POST_CONTAINER:{
    path:'/posts/:id',
    Component: PostContainer,
    linkTo: (id) => `/posts/${id}`
  }
};
