
const initState = {
  posts: [
    { id: '1', title: 'Post 1 title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia, in, minima dolorum nobis reprehenderit nam sed amet quae ea magnam esse nemo tenetur ab dolor natus odit aspernatur fugit.' }
    ,{ id: '2', title: 'Post 2 title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia, in, minima dolorum nobis reprehenderit nam sed amet quae ea magnam esse nemo tenetur ab dolor natus odit aspernatur fugit.' }
    ,{ id: '3', title: 'Post 3 title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia, in, minima dolorum nobis reprehenderit nam sed amet quae ea magnam esse nemo tenetur ab dolor natus odit aspernatur fugit.' }
  ]
}

const rootReducer = (state = initState, action) => {

  // console.log(action);
  
  if(action.type === 'DELETE_POST') {

    // update state, with no destructive, with no alter the original state, 
    // so we use filter method which creates a new array
    
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  
  return state;
}

export default rootReducer;