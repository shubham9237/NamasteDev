const CommentBox = ({data}) => {

    return data.map((comment, index) => <div key={index} className="pl-10 border-l-2 border-black">
                    <div className="flex">
                    <div>
                        <img className="rounded-full w-16 h-16 p-2" src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="Image"></img>
                    </div>
                    <div>
                        <p className="font-bold px-2 my-1">{comment.username}</p>
                        <p className="px-2">{comment.comment}</p>
                    </div>

                    </div>
                    <div>
                        { comment.replies && <CommentBox data={comment.replies} /> }
                    </div>
                </div>

            );
}
export default CommentBox;