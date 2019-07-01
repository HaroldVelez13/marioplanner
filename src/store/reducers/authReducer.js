const initState = {
	authError:null
}

const authReducer = (state = initState,action) => {
	switch(action.type){

		case 'LOGIN_ERROR':
			console.log('Login Error');
			return {
				...state,
				authError:'Falló la Validación'
			}

		case 'LOGIN_SUCCESS':
			console.log('Login Fullki');
			return {
				...state,
				authError:null
			}

		case 'SIGNOUT_SUCCESS':
			console.log('sesion cerrada');		
			return state;

		case 'SIGNUP_SUCCESS':
			console.log('Registro OK');
			return {
				...state,
				authError:null
			}


		case 'SIGNUP_ERROR':
			console.log('Registro Fail');		
			return {
				...state,
				authError: action.err.message
			}		

		default:
			return state;

	}
}

export default authReducer