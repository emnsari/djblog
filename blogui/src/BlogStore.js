import {ReduceStore} from 'flux/utils';
import dispatcher from './BlogDispatcher';
import {Map} from "immutable";

class BlogStore extends ReduceStore {
  getInitialState() {
    return Map({
      articles: [],
    });
  }

  reduce(state, action) {
    console.log(action);
    if(action.type === 'blog-articles'){
      return state.set('articles', action.value);
    }
    return state;
  }
}

export default new BlogStore(dispatcher);