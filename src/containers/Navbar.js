import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
// import Logo from '../images/video-logo.jpg'; // logo image

class Navbar extends Component {
	logout = (e) => {
		e.preventDefault();
		this.props.logout();
	};
	render() {
		return (
			<nav className="navbar navbar-expand">
				<div className="container">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">
							Company Logo
							{/* <img src={Logo} alt="Warbler Home" /> */}
						</Link>
					</div>
					{this.props.currentUser.isAuthenticated ? (
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to={`/users/${this.props.currentUser.user.id}/playlists/new`}>New Playlists</Link>
							</li>
							<li>
								<Link to="/" onClick={this.logout}>
									Log out
								</Link>
								{/* there was a tag instead of button  */}
							</li>
						</ul>
					) : (
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to="/signup">Sign up</Link>
							</li>
							<li>
								<Link to="/signin">Log in</Link>
							</li>
						</ul>
					)}
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}

export default connect(mapStateToProps, { logout })(Navbar);