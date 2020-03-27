
const initState = {
  posts: [
    {id: '1', title: 'Stuff', body: 'Lots of pokemon'},
    {id: '2', title: 'Evil Squirtles', body: 'Lots of pokemon'},
    {id: '3', title: 'Pikachu is Shocking', body: 'Ouch!'},
    {id: '4', title: 'Evil Charizards', body: 'They\'re on fire!'},
    {id: '5', title: 'Exploud is Loud!', body: 'Cover your ears...'},
  ],
  selectedView: "Dashboard",
};

const rootReducer = (state=initState, action) => {
  switch(action.type) {
    case 'DELETE_POST': {
      const posts = state.posts.filter((post) => post.id !== action.id);
      return {
        ...state,
        posts
      };
    }

    case 'SELECT_VIEW': {
      const selectedView = action.view;
      return {
        ...state,
        selectedView
      }
    }

    default: {
      return state;
    }
  }
}

export default rootReducer;