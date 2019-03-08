import Home from '../container/home/Home';
// import FilteredPosts from './container/';
// import RegisterUser from './container/';
import AllUsers from '../container/AllUsers';
import AllPosts from '../container/AllPosts';
import UserContainer from '../container/UserContainer';
import AllComments from '../container/AllComments';
import PostContainer from '../container/PostContainer';

export const ROUTES = {
  HOME:{
    path:'/',
    Component: Home,
    linkTo:() => '/'
  },
  // FILTERED_POSTS:{
  //   path:'/',
  //   Component: FilteredPosts,
  //   linkTo:() => '/filteredPosts'
  // },
  // REGISTERED_USER:{
  //   path:'/',
  //   Component: RegisterUser,
  //   linkTo:() => '/register'
  // }, 
  ALL_USERS:{
    path:'/users',
    Component: AllUsers,
    linkTo: () => '/users'
  },
  ALL_POSTS:{
    path:'/posts',
    Component: AllPosts,
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
