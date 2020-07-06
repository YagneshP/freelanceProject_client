import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import messages from './messages';
import playlists from './playlists';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	currentUser,
	errors,
	messages,
	playlists,
	form: formReducer
});

export default rootReducer;
