import {
  getAllPosts,
  getTop5Posts,
  getPostSearchTerm,
  getFilteredPosts,
  getPostsForUser
} from './posts';

describe('post selectors', () => {
  let state = {};

  beforeEach(() => {
    state = {
      posts: {
        postSearchTerm: 'pos',
        isLoading: false,
        posts: [
          { 
            userId: 1,
            title: 'a post',
            body: 'a pfdsafdasfdasfdafda ost'
          },
          { 
            userId: 2,
            title: 'another post',
            body: 'b pofdsaf dsafdsafdasst'
          },
          { 
            userId: 3,
            title: 'other post',
            body: 'c fdsafdsa'
          },
          { 
            userId: 4,
            title: 'another other post',
            body: 'd poadsflk;jdaslkfjkldsafst'
          },
          { 
            userId: 5,
            title: 'another other other post',
            body: 'c pos tffdsafd'
          },
          { 
            userId: 6,
            title: 'another other another',
            body: 'c post'
          }
        ]
      }
    };
  });

  it('gets all posts', () => {
    const result = getAllPosts(state);
    expect(result).toEqual(state.posts.posts);
  });

  it('gets top 5 posts by length', () => {
    const result = getTop5Posts(state);
    expect(result).toHaveLength(5);
    expect(result).toEqual([
      {
        ...state.posts.posts[0],
        title: 'another other post',
        body: 'd poadsflk;jdaslkfjkldsafst'
      },
      {
        ...state.posts.posts[1],
        title: 'a post',
        body: 'a pfdsafdasfdasfdafda ost'
      },
      {
        ...state.posts.posts[2],
        title: 'another post',
        body: 'b pofdsaf dsafdsafdasst'
      },
      {
        ...state.posts.posts[3],
        title: 'another other other post',
        body: 'c pos tffdsafd'
      },
      {
        ...state.posts.posts[4],
        title: 'other post',
        body: 'c fdsafdsa'
      }
    ]);
  });

  it('gets post search term', () => {
    const result = getPostSearchTerm(state);
    expect(result).toEqual('pos');
  });

  it('gets filtered posts by title', () => {
    const result = getFilteredPosts(state);
    expect(result).toEqual([
      { 
        ...state.posts.posts[0],
        title: 'a post',
        body: 'a pfdsafdasfdasfdafda ost'
      },
      { 
        ...state.posts.posts[1],
        title: 'another post',
        body: 'b pofdsaf dsafdsafdasst'
      },
      { 
        ...state.posts.posts[2],
        title: 'other post',
        body: 'c fdsafdsa'
      },
      { 
        ...state.posts.posts[3],
        title: 'another other post',
        body: 'd poadsflk;jdaslkfjkldsafst'
      },
      { 
        ...state.posts.posts[4],
        title: 'another other other post',
        body: 'c pos tffdsafd'
      },
    ]);
  });

  it('gets post for user', () => {
    const result = getPostsForUser(state, 1);
    expect(result).toEqual([
      {
        userId: 1,
        title: 'a post',
        body: 'a pfdsafdasfdasfdafda ost'
      }
    ]);
  });
});
