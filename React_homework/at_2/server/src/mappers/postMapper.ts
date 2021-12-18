import {DateUtils, ObjectUtils} from "../utils";
import {IPostPreview} from "../types/post";

class PostMapper {
  static normalizePostForClient(post: IPostPreview, locale?: string): IPostPreview {
    return ObjectUtils.updateObject(post, {publishDate: DateUtils.normalizeCardDate(post.publishDate, locale)})
  }

  static normalizePostsForClient(posts: IPostPreview[], locale?: string): IPostPreview[] {
    return posts.map((post) => PostMapper.normalizePostForClient(post, locale));
  }
}

export default PostMapper;
