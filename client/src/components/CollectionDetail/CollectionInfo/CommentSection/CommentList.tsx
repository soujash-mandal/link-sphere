interface Comment {
    id: number;
    text: string;
    user: string;
    date: string;
  }
  
  const CommentList = ({ comments }: { comments: Comment[] }) => (
    <div className="mt-4 space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="p-4 border rounded-lg bg-gray-100">
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-semibold">{comment.user}</span>
            <span className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</span>
          </div>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );

  export default CommentList