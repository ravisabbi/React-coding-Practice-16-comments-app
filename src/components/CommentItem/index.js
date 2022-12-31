// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const likeImageUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
const likedImageUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

const CommentItem = props => {
  const {commentDetails, onToggleLike, onDeleteComment} = props
  const {name, comment, isLiked, id, profileClassName, date} = commentDetails
  const imageUrl = isLiked ? likedImageUrl : likeImageUrl
  const likedClassName = isLiked ? 'liked-class-name' : ''

  const toggleLikeBtn = () => {
    onToggleLike(id)
  }

  const deleteComment = () => {
    onDeleteComment(id)
  }

  return (
    <li>
      <div className="text-logo-container">
        <p className={`profile-logo ${profileClassName}`}>{name.slice(0, 1)}</p>
        <div className="text-container">
          <div className="name-time-container">
            <p className="name">{name}</p>
            <p className="time-distance">{formatDistanceToNow(date)}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-btn-container">
        <button
          type="button"
          className={`like-btn ${likedClassName}`}
          onClick={toggleLikeBtn}
        >
          <img src={imageUrl} alt="like" className="like-image" />
          Like
        </button>
        <button
          type="button"
          className="delete-btn"
          testid="delete"
          onClick={deleteComment}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="comment-separator" />
    </li>
  )
}

export default CommentItem
