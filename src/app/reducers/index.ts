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
    layout:fromLayout.layoutReducer,
    links: fromLinks.linkReducer
};

const globalState: ActionReducer<State> = combineReducers(globalReducers);

export function reducers(state: any, action: any) { return globalState(state, action);}

/*layout*/
export const getLayoutState = (state: State) => state.layout;
export const getShowAddModal = createSelector(getLayoutState, fromLayout.getShowAddModal);


/*links*/
export const getLinkState = (state: State) => state.links;
export const getLinks = createSelector(getLinkState, fromLinks.getLinks);

