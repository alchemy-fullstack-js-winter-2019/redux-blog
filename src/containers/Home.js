import { withDisplayContent } from './higher-order/DisplayContent';
import { getTop5Posts } from '../selectors/posts';
import { fetchPosts } from '../actions/posts';
import Posts from '../components/posts/Posts';

export default withDisplayContent({
  contents: [
    {
      name: 'posts',
      getContent: getTop5Posts
    }
  ],
  fetches: [fetchPosts],
  Component: Posts
});
