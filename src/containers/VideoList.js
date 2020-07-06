import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos, removeVideo } from '../store/actions/videos';
import VideoItem from '../components/VideoItem';

class VideoList extends Component {
	componentDidMount() {
		this.props.fetchVideos();
	}
	render() {
		const { videos, removeVideo, currentUser } = this.props;
		let videoList = videos.map((v) => (
			<VideoItem
				key={v._id}
				date={v.createAt}
				text={v.text}
				username={v.user.username}
				profileImageUrl={v.user.profileImageUrl}
				removeMessage={removeVideo.bind(this, v.user._id, v._id)}
				isCorrectUser={currentUser === v.user._id}
			/>
		));
		return (
			<div className="row col-sm-8">
				<div className="offset-1 col-sm-10">
					<ul className="list-group" id="messages">
						{videoList}
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		videos: state.videos,
		currentUser: state.currentUser.user.id
	};
}

export default connect(mapStateToProps, { fetchVideos, removeVideo })(VideoList);
