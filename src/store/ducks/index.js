/**
 * Arquivo responsável por unir todos os Reducers e exibi-los na aplicação
 */
import { combineReducers } from 'redux';

import example from './example';
import auth from './auth';

export default combineReducers({
    example,
    auth
});