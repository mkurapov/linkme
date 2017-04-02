import { ActionReducer, Action } from '@ngrx/store';
import * as layoutActions from '../actions/layout';

export interface LayoutState {
    showAddModal: boolean
}

const initialState: LayoutState = {
    showAddModal: false,
};
 
export function layoutReducer(state = initialState, action: Action): LayoutState {

    switch (action.type) {
        case layoutActions.TOGGLE_ADD_MODAL:
            const newBoolState = state.showAddModal ? false : true ;
            return { 
                showAddModal: newBoolState
            };
 
        default:
            return state;
    }
}

export const getShowAddModal = (state: LayoutState) => state.showAddModal;
