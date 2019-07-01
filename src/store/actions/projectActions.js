export const SHOW_PROJECTS = 'SHOW_PROJECTS';
export const SHOW_PROJECTS_ERROR = 'SHOW_PROJECTS_ERROR';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const DELETE_PROJECT_ERROR = 'DELETE_PROJECT_ERROR';

export const showProjects = () => {
	return (dispatch, getState, {  getFirestore } ) => {
		const firestore = getFirestore();
		firestore.collection('projects').get()
		.then( (projects)=> {
			dispatch( {type:SHOW_PROJECTS}, projects );
		})
		.catch( (err) => {
			dispatch( {type:SHOW_PROJECTS_ERROR, err} );
		})
		
		
	}
};

export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore } ) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;
		firestore.collection('projects').add({
			...project,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
			createdAt: new Date()
		}).then( ()=> {
			dispatch( {type:CREATE_PROJECT, project} );
		}).catch( (err) => {
			dispatch( {type:CREATE_PROJECT_ERROR, err} );
		})
		
		
	}
};

export const deleteProject = (projectId) => {
	return (dispatch, getState, {  getFirestore } ) => {
		const firestore = getFirestore();
		firestore.collection('projects').doc(projectId).delete()
		.then( ()=> {
			dispatch( {type:DELETE_PROJECT, projectId} );
		})
		.catch( (err) => {
			dispatch( {type:DELETE_PROJECT_ERROR, err} );
		})
		
		
	}
};