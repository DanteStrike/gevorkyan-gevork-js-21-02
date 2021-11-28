import {IPostPreview, IUserPreview} from "../types";

const createDefaultUser = (): IUserPreview => ({
  id: ``,
  title: ``,
  firstName: ``,
  lastName: ``,
  picture: ``,
})

const createDefaultPost = (): IPostPreview => ({
  id: ``,
  text: ``,
  image: ``,
  publishDate: ``,
  owner: createDefaultUser()
})

export default {
  createDefaultUser,
  createDefaultPost
}

