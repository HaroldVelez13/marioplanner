const initState = {
	projects: [],
	projectsError:null
}

const projectReducer = (state = initState,action) => {
	switch (action.type) {

		case 'SHOW_PROJECTS':
			return {
				...state,
				projectsError: null
			}

		case 'SHOW_PROJECTS_ERROR':
			return {
				...state,
				projectsError: action.err.message
			}

		case 'CREATE_PROJECT':
			return {
				...state,
				projectsError: null
			}

		case 'CREATE_PROJECT_ERROR':
			return {
				...state,
				projectsError: action.err.message
			}

		case 'DELETE_PROJECT':
			return {
				...state,
				projectsError: null
			}

		case 'DELETE_PROJECT_ERROR':
			return {
				...state,
				projectsError: action.err.message
			}
			
		default:
			return state;
	}
}

export default projectReducer