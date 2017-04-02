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
 
export function linkReducer(state = initialState, action: Action): LinkState {
 
    switch (action.type) {    
        case linkActions.ADD_LINK:

            const newLinks = state.links;
            const newLink: Link = {id:12,address:action.payload,title:'newlink',type:'Article',dateAdded: new Date(Date.now()),tags:['design']}
            newLinks.push(newLink);
            
            return { 
                links: newLinks
            };
 
        default:
            return state;
    }
}

export const getLinks = (state: LinkState) => state.links;
