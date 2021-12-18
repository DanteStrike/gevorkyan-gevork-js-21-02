import {DateUtils, ObjectUtils} from '../utils';
import {IPostPreview} from '../types/post';
import {IComment} from '../types/comment';

class PostMapper {
  static normalizePostForClient(post: IPostPreview, locale?: string): IPostPreview {
    return ObjectUtils.updateObject(post, {publishDate: DateUtils.normalizeCardDate(post.publishDate, locale)});
  }

  static normalizePostsForClient(posts: IPostPreview[], locale?: string): IPostPreview[] {
    return posts.map((post) => PostMapper.normalizePostForClient(post, locale));
  }

  static normalizeCommentForClient(comment: IComment, locale?: string): IComment {
    return ObjectUtils.updateObject(comment, {publishDate: DateUtils.normalizeCardDate(comment.publishDate, locale)});
  }

  static normalizeCommentsForClient(comments: IComment[], locale?: string): IComment[] {
    return comments.map((comment) => PostMapper.normalizeCommentForClient(comment, locale));
  }
}

export default PostMapper;
