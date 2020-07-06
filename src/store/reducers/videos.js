import { LOAD_VIDEOS, REMOVE_VIDEO } from '../actionTypes';

const video = (state = [], action) => {
	switch (action.type) {
		case LOAD_VIDEOS:
			return [ ...action.videos ];
		case REMOVE_VIDEO:
			return state.filter((video) => video._id !== action.id);
		default:
			return state;
	}
};

export default video;
