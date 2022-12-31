import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const profileClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      profileClassName,
      isLiked: false,
      date: new Date(),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeUsername = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onToggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state
    const totalComments = commentsList.length
    return (
      <div className="app-container">
        <h1 className="main-heading">Comments</h1>
        <form onSubmit={this.onSubmitForm} className="form-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />
          <div className="input-section">
            <p className="caption">Say something about 4.O Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              className="name-input"
              onChange={this.onChangeUsername}
            />
            <textarea
              rows="5"
              className="text-area"
              placeholder="Your Comment"
              value={comment}
              onChange={this.onChangeComment}
            />
            <button type="submit" className="add-btn">
              Add Comment
            </button>
          </div>
        </form>
        <hr className="separator" />
        <div className="comments-count-container">
          <p className="comments-count">{totalComments}</p>
          <p className="comments-title">Comments</p>
        </div>
        <ul className="comments-list">
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              onToggleLike={this.onToggleLike}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
