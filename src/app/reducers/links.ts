import { ActionReducer, Action } from '@ngrx/store';
import * as linkActions from '../actions/links';
import { Link } from '../classes/Link';
import {LINKS} from '../data/mock-data';


export interface LinkState {
    links: Link[];
}

const initialState: LinkState = {
    links: LINKS
};
 
export const linkReducer: ActionReducer<LinkState> = (state = initialState, action: Action) => {
    
    switch (action.type) {    
        case linkActions.ADD_LINK:
            const newLinks = state.links;
            newLinks.push(action.payload);
            return { 
                links: newLinks
            };
 
        default:
            return state;
    }
}

export const getLinks = (state: LinkState) => state.links;
