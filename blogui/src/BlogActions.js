import dispatcher from './BlogDispatcher';

const actions = {
  fetchArticles: () => {
    console.log("fetching ... ");
    const url = 'http://localhost:8000/api/articles.json';
    fetch(url).then(resp => {
      console.log(resp);
      if (resp.ok) {
        return resp.json();
      }
    }).then(json => {
      console.log(json);
      dispatcher.dispatch({
        type: 'blog-articles',
        value: json
      })
    })
  }

};


export default actions;
