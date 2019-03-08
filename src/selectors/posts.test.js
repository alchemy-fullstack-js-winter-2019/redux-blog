import { getPostsBySearch } from './posts';


describe('test', () => {
  it('returns an array of posts', () => {
    const state = {
      posts: {
        posts: [
          { title: 'sometitle' }
        ],
        searchTerm: 's'
      }
    }; 

    const results = getPostsBySearch(state);
    expect(results).toHaveLength(1);
  });
});
