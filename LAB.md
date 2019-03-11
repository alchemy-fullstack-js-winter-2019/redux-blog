# Redux blog

Use the [https://jsonplaceholder.typicode.com/] API to
get users, posts, and comments

## Pieces

### Services

<!-- * `blogService`
  * `getComments(postId)`
  * `getUsers()`
  * `getPosts()` -->

### Components

<!-- - `Home` display top 5 longest posts
- `Header` with nav
- `Users` display a list of users -->

<!-- - `UserDetails` displays a user's `name`, `username`, `email`, and their `posts` -->
  <!-- - `User` individual user item for a list -->

- BONUS: `RegisterUserForm` form to register a new user
  <!-- - `Posts' display a list of posts
    <!-- - `Post` individual post item for a list has a Link to `PostDetails` --> -->
  <!-- - `PostDetails` display a post and all of its comments -->
      <!-- - `Comments` list of comments
    <!-- - `Comment` individual comment item for a list --> -->

### Containers

* `Home` display the top 5 longest posts
* `AllUsers` display all users
* `RegisterUser` create a new user
* `FilterPosts` filter posts by title (for all users)
* `UserDetailsContainer`
* `PostDetailsContainer`

### reducers

<!-- - `users` stores user information
- `posts` stores post information
- `comments` stores comment information for a single post -->

### actions

- User
  - BONUS: `REGISTER_USER`
    <!-- - `FETCH_USERS`
  - `LOAD_USERS_START`
  - `LOAD_USERS_END` -->
- Posts
  <!-- - `UPDATE_POST_SEARCH_TERM`
  - `FETCH_POSTS`
  - `LOAD_POSTS_START`
  - `LOAD_POSTS_END` -->
- Comments
  <!-- - `FETCH_COMMENTS`
  - `LOAD_COMMENTS_START`
  - `LOAD_COMMENTS_END` -->

### selectors

- Users
  <!-- - `getUsers` -->
- Posts
  <!-- - `getLongestPosts`
  - `getPosts` -->
  <!-- - `getFilteredPosts` -->
    <!-- - `getPostsForUser` -->
- Comments
  <!-- - `getComments` -->

### BONUS: Higher order component

- Create a `withList` higher order component
  - `withList` expects a `list` prop with `PropTypes.array.isRequired`
    - each array item should be an object
  - `withList` takes a Component to create for each item in `list`
  - `withList` takes a optional argument for options
    - `options`
      - `propKey`
        - name that `withList` will use to pass each object in `list` to Component
        - e.g. if propKey is comment `<Component comment={obj} />`
      - `spread`
        - should include `spread` with is a boolean defaulting to false
        - if spread is true, `withList` spreads the items in a list item into Component
        - if spread is false `withList` passes the entire object to the Component using
          `propKey`
        - e.g. if spread is true `<Component {...obj} />`
        - e.g. if spread is false `Component propKey={obj} />`

## Tests

<!-- - Snapshot test components -->
<!-- - mock and test the `blogService` -->

<!-- - Unit test reducers, selectors, actions -->
  <!-- - actions should use the `blogService` mock -->
