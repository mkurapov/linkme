import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';

import * as fromLinks from './links';
import * as fromLayout from './layout';

export interface State{
    layout: fromLayout.LayoutState
    links: fromLinks.LinkState
}

const globalReducers = {
    layoutReducer:fromLayout.layoutReducer,
    linksReducer: fromLinks.linkReducer
};

const globalState: ActionReducer<State> = combineReducers(globalReducers);

export function reducers(state: any, action: any) { return globalState(state, action);}

/*layout*/
export const getLayoutState = (state: State) => state.layout;
export const getShowAddModal = createSelector(getLayoutState, fromLayout.getShowAddModal);



