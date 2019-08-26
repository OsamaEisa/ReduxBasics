
// delete action
export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id: id // id ES6
  }
}