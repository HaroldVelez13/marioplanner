const initState = {
	projects: []
}

const projectReducer = (state = initState,action) => {
	switch (action.type) {
		case 'SHOW_PROJECTS':
			return state;
		case 'SHOW_PROJECTS_ERROR':
			return state;
		case 'CREATE_PROJECT':
			return state;
		case 'CREATE_PROJECT_ERROR':
			return state;
		case 'DELETE_PROJECT':
			return state;
		case 'DELETE_PROJECT_ERROR':
			return state;
		default:
			return state;

	}
}

export default projectReducer