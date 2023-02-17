import { useContext } from "react"  

function CommentCard({ comment, onDelete }) {
    const { currentUser } = useContext(currentUser)

    let deleteButton = null;

    if (currentUser?.userId === comment.authorId) {
        deleteButton = (
            <button className="btn btn-danger" onClick={onDelete} >
                Delete Comment
            </button>
        )
    }
    return (
        <div className="border col-sm-4">
            <h2 className="rant">{comment.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                <strong>- {comment.author.firstName} {comment.author.lastName}</strong>
            <h4>Rating: {comment.stars}</h4>
            {deleteButton}
        </div>
    )
}


export default CommentCard;