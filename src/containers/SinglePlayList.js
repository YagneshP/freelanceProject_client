import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import DefaultProfileImg from '../images/default-profile-image.jpg';

class SinglePlayList extends Component {
	constructor(props) {
		super(props);

		// State;
		this.state = {
			_id: '',
			name: '',
			detail: '',
			uploadBy: ''
		};
	}

	componentDidMount() {
		if (this.props.currentPlaylist) {
			const { _id, name, detail, uploadBy } = this.props.currentPlaylist;
			this.setState({
				_id,
				name,
				detail,
				uploadBy
			});
		}
	}

	render() {
		const { _id, name, detail, uploadBy } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-8">
						<div className="embed-responsive embed-responsive-16by9">
							<iframe
								className="embed-responsive-item"
								src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
								allowfullscreen
							/>
						</div>
						<div>
							<li className="list-group-item">
								<img
									src={DefaultProfileImg}
									src
									alt={uploadBy.firstName}
									height="100"
									width="100"
									className="timeline-image"
								/>
								<div className="message-area">
									<Link to="/">@{uploadBy.firstName} &nbsp;</Link>
									{/* <span className="text-muted">
					<Moment className="text-muted" format="Do MMM YYYY">
						{date}
					</Moment>
				</span> */}
									<p>{name}</p>
								</div>
							</li>
						</div>
						<div className="row" style={{ marginTop: '16px' }}>
							<Form className="col-12">
								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Control
										as="textarea"
										rows="1"
										maxlength="1000"
										minlength="1"
										style={{ borderBottom: '2px solid black' }}
									/>
								</Form.Group>
								<Button variant="dark">Add Comment</Button>
							</Form>
						</div>
						<div className="row">
							<h4>Comment Section</h4>
						</div>
					</div>
					<div className="col-4">
						<div className="row" style={{ height: '200px', marginBottom: '10px' }}>
							<iframe
								className="embed-responsive-item"
								src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
							/>
						</div>
						<div className="row" style={{ height: '200px', marginBottom: '10px' }}>
							<iframe
								className="embed-responsive-item"
								src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
							/>
						</div>
						<div className="row" style={{ height: '200px', marginBottom: '10px' }}>
							<iframe
								className="embed-responsive-item"
								src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// function mapStateToProps(state) {
// 	return {
// 		errors: state.errors,
// 		playlists: state.playlists,
// 		currentPlaylist: state.playlists.currentPlaylist
// 	};
// }

export default SinglePlayList;
