import React from 'react';
import VideoList from '../containers/VideoList';
import UserAside from './UserAside';

const VideoTimeLine = (props) => {
	return (
		<div className="row">
			<UserAside profileImageUrl={props.profileImageUrl} username={props.username} />
			<VideoList />
		</div>
	);
};

export default VideoTimeLine;
