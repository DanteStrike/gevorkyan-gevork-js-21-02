import {IPostPreview, IUser, IUserPreview} from '../types';

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

const createDefaultComment = () => ({
  id: ``,
  message: ``,
  owner: createDefaultUser(),
  post: ``,
  publishDate: ``,
})

const createDefaultFullUser = (): IUser => ({
  id: ``,
  title: ``,
  firstName: ``,
  lastName: ``,
  gender: ``,
  email: ``,
  dateOfBirth: ``,
  registerDate: ``,
  phone: ``,
  picture: ``,
  location: {
    street: ``,
    city: ``,
    state: ``,
    country: ``,
    timezone: ``,
  },
});

const createDefaultUsers = (amount: number) => new Array(amount).fill(``).map(createDefaultUser);
const createDefaultPosts = (amount: number) => new Array(amount).fill(``).map(createDefaultPost);
const createDefaultComments = (amount: number) => new Array(amount).fill(``).map(createDefaultComment);

export default {
  createDefaultUser,
  createDefaultPost,
  createDefaultUsers,
  createDefaultPosts,
  createDefaultFullUser,
  createDefaultComment,
  createDefaultComments
};
