const initState = {
	projects: []
}

const projectReducer = (state = initState,action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			//console.log('creando projecto', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR':
			//console.log('creando projecto error', action.err);
			return state;
		case 'DELETE_PROJECT':
			//console.log('borrando projecto', action.projectId);
			return state;
		case 'DELETE_PROJECT_ERROR':
			console.log('borrando projecto error', action.err);
			return state;
		default:
			return state;

	}
}

export default projectReducer