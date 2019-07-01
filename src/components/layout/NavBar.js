import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import BoxMario from '../mario/BoxMario';

const NavBar = (props) => {
	const { auth, profile } = props;
	const links = auth.uid ? <SignedInLinks profile={profile}/> :	<SignedOutLinks/>;
		
	return(
		<nav className="nav-wrapper grey darken-3">
	    <div className="container">
	    <div className="hide-on-small-only"><a href="#!" className="brand-logo left"> <i><BoxMario /></i> Mario Planner</a></div>	
	    <div className="hide-on-med-and-up"><a href="#!" className="brand-logo left" title="Mario Planner"> <i><BoxMario /></i> MP</a></div>	
	      
	      { links }	
	    </div>
	  </nav>
	)

}

const mapStateToProps = (state) => {
	return {
		auth:state.firebase.auth,
		profile: state.firebase.profile
	}
}
export default connect(mapStateToProps)(NavBar)