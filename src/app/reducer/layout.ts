import { ActionReducer, Action } from '@ngrx/store';
 
export const OPEN_ADD_MODAL = 'OPEN_ADD_MODAL';
export const CLOSE_ADD_MODAL = 'CLOSE_ADD_MODAL';
 
export const layoutReducer: ActionReducer<boolean> = (state: boolean = false, action: Action) => {
    switch (action.type) {
        case OPEN_ADD_MODAL:
            return true;
 
        case CLOSE_ADD_MODAL:
            return false;
 
        default:
            return state;
    }
}