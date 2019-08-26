import React, {Component} from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
 
  // state = { posts: [] }
  
  /** Using axios to get dumy data from jason placeholder **
    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          // console.log(res.data.slice(1,10));
          this.setState({
            posts: res.data.slice(0,10)
          })
        })
    }
  */

  render() {
    console.log(this.props);
    const {posts} = this.props;
    const postsList = posts.length ? (
      posts.map(post => {
        return (
          <div className='post card' key={post.id}>
            <img src={Pokeball} alt='A pokeball' />
            <div className='card-content'>
              <Link to={'/' + post.id} className='red-text'>
                <span className='card-title'>{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : <div className='center red-text'>No posts yet!</div>
    return (
      <div className='container home'>
        <h1 className='center'>Home Page</h1>
        { postsList }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}


export default connect(mapStateToProps)(Home)