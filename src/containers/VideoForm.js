import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewVideo } from '../store/actions/videos';

class VideoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			video: ''
		};
	}

	handleNewVidoe = (event) => {
		event.preventDefault();
		this.props.postNewVideo(this.state.video);
		this.setState({ video: '' });
		this.props.history.push('/');
	};

	render() {
		return (
			<form onSubmit={this.handleNewVidoe}>
				{this.props.errors.message && <div className="alert alert-danger">{this.props.errors.message}</div>}
				<input
					type="text"
					className="form-control"
					value={this.state.video}
					onChange={(e) => this.setState({ video: e.target.value })}
				/>
				<button type="submit" className="btn btn-success">
					Add my video!
				</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		errors: state.errors
	};
}

export default connect(mapStateToProps, { postNewVideo })(VideoForm);
