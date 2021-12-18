import {DateUtils, ObjectUtils} from "../utils";
import {IPostPreview} from "../types/post";

class PostMapper {
  static normalizePostForClient(post: IPostPreview): IPostPreview {
    return ObjectUtils.updateObject(post, {publishDate: DateUtils.normalizeCardDate(post.publishDate)})
  }

  static normalizePostsForClient(posts: IPostPreview[]): IPostPreview[] {
    return posts.map(PostMapper.normalizePostForClient);
  }
}

export default PostMapper;
