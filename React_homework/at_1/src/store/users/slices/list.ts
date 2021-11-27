import NameSpace from '../../name-space';
import {IUserPreview} from '../../../types';
import {createListReducer} from '../../hor';

const list = createListReducer<IUserPreview>([NameSpace.USERS] as unknown as string);
const listActions = list.actions;
const listSelectors = list.selectors;
const listReducer = list.reducer;

export {listActions, listSelectors, listReducer};
