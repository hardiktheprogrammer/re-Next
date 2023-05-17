import { comments } from '../../../data/comments';

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find((commentId) => comment.id === parentInt(commentId));

  res.status(200).json(comment);
}
