import {createStore} from 'redux';

import {IApplicationState} from './models';

const initialState: IApplicationState = {
    players: [],
};

const reducer = (state: IApplicationState = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PLAYERS':
            return {
                ...state,
                players: action.payload,
            };
        case 'RESET_STATE':
            return initialState;
        default:
            return state;
      }
};

const store = createStore(reducer);
export const dispatch = store.dispatch;
export const getState: () => IApplicationState = store.getState;
