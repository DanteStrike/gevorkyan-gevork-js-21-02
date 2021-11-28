import {IPostPreview, IUserPreview} from '../types';

const createDefaultUser = (): IUserPreview => ({
  id: ``,
  title: ``,
  firstName: ``,
  lastName: ``,
  picture: ``,
});

const createDefaultPost = (): IPostPreview => ({
  id: ``,
  text: ``,
  image: ``,
  publishDate: ``,
  owner: createDefaultUser(),
});

const createDefaultUsers = (amount: number) => new Array(amount).fill(``).map(createDefaultUser);
const createDefaultPosts = (amount: number) => new Array(amount).fill(``).map(createDefaultPost);

export default {
  createDefaultUser,
  createDefaultPost,
  createDefaultUsers,
  createDefaultPosts,
};
