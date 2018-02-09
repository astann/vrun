import {dispatch} from '../state';

/**
 * /stop command handler.
 */
export const stopHandler = () => {
    dispatch({type: 'RESET_STATE'});
};
