import {DateUtils, ObjectUtils} from "../utils";
import {IComment} from "../types/comment";

class CommentsMapper {
  static normalizeCommentForClient(comment: IComment, locale?: string): IComment {
    return ObjectUtils.updateObject(comment, {publishDate: DateUtils.normalizeCardDate(comment.publishDate, locale)})
  }

  static normalizePostsForClient(comments: IComment[], locale?: string): IComment[] {
    return comments.map((comment) => CommentsMapper.normalizeCommentForClient(comment, locale));
  }
}

export default CommentsMapper;
