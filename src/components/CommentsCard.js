import Comment from "./Comment"

function CommentsCard({comments}) {
    return ( 
        <div>
            <h2>{comments.length} comments</h2>
            <div>
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment}/>
                ))}
            </div>

        </div>
    );
}

export default CommentsCard;

