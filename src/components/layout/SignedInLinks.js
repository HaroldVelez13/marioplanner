import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
	return(
		<ul  className="right" >
			<li><NavLink to="/crear">Nuevo Projecto</NavLink></li>
			<li><a href="#!"onClick={props.signOut}>Salir</a></li>
			<li><NavLink to="/" className="btn btn-floating red accent-1">
				{props.profile.initials}
			</NavLink></li>

		</ul>
	)

}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut : () => dispatch(signOut())
	}
}

export default connect(null,mapDispatchToProps)(SignedInLinks)