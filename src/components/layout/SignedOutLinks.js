import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
	return(
		<ul  className="right" >
			<li><NavLink to="/ingresar">Ingresar</NavLink></li>
			<li><NavLink to="/registrase">Registrarse</NavLink></li>
		</ul>
	)

}

export default SignedOutLinks