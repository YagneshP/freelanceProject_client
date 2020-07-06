import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';
import { setCurrent } from '../store/actions/playlist';
import Logo from '../images/warbler-logo.png';
// import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const PlayListItem = ({
	date,
	name,
	firstName,
	profileImageUrl,
	removePlaylist,
	editPlaylist,
	setCurrent,
	isCorrectUser,
	playListId,
	userId,
	detail,
	index
}) => (
	//before Carsoule
	// <div>
	// 	<li className="list-group-item">
	// 		<img
	// 			src={profileImageUrl || DefaultProfileImg}
	// 			alt={firstName}
	// 			height="100"
	// 			width="100"
	// 			className="timeline-image"
	// 		/>
	// 		<div className="message-area">
	// 			<Link to="/">@{firstName} &nbsp;</Link>
	// 			<span className="text-muted">
	// 				<Moment className="text-muted" format="Do MMM YYYY">
	// 					{date}
	// 				</Moment>
	// 			</span>
	// 			<p>{name}</p>
	// 			<p> Upload By : {firstName}</p>
	// 			{isCorrectUser && (
	// 				<div>
	// 					<Button variant="danger" onClick={removePlaylist}>
	// 						Delete
	// 					</Button>{' '}
	// 					<Link to={`/users/${userId}/playlists/${playListId}/edit`}>
	// 						<Button variant="warning" onClick={() => setCurrent()}>
	// 							{/**/}
	// 							Edit
	// 						</Button>
	// 					</Link>
	// 				</div>
	// 			)}
	// 		</div>
	// 	</li>
	// </div>
	<div className="col-sm-6">
		<Card style={{ marginTop: '1rem' }}>
			<Card.Img variant="top" style={{ height: '16rem' }} src="assets/img/img2.jpg" />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{detail}</Card.Text>
			</Card.Body>
			<Card.Footer>
				{isCorrectUser ? (
					<div>
						<Button variant="danger" onClick={removePlaylist}>
							Delete
						</Button>{' '}
						<Link to={`/users/${userId}/playlists/${playListId}/edit`}>
							<Button variant="warning" onClick={() => setCurrent()}>
								{/**/}
								Edit
							</Button>
						</Link>{' '}
						<Link to={`/users/${userId}/playlists/${playListId}`}>
							<Button variant="info" onClick={() => setCurrent()}>
								{/**/}
								Go To The PlayList
							</Button>
						</Link>
					</div>
				) : (
					<div>
						<Link to={`/users/${userId}/playlists/${playListId}/edit`}>
							<Button variant="info" onClick={() => setCurrent()}>
								{/**/}
								Go To The PlayList
							</Button>
						</Link>
					</div>
				)}
				<small className="text-muted">
					Last updated at{' '}
					<Moment className="text-muted" format="Do MMM YYYY">
						{date}
					</Moment>
				</small>
			</Card.Footer>
		</Card>
	</div>
);

export default PlayListItem;
