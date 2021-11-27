import NameSpace from '../../name-space';
import {IPostPreview} from '../../../types';
import {createListReducer} from '../../hor';

const list = createListReducer<IPostPreview>(`${[NameSpace.PROFILE]}`);
const listActions = list.actions;
const listSelectors = list.selectors;
const listReducer = list.reducer;

export {listActions, listSelectors, listReducer};
