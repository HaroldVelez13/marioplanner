import React , { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from '../../config/moment';
import { deleteProject } from '../../store/actions/projectActions';



class ProjectDetail extends Component {
	
	handleClick = (e) => {
		e.preventDefault();
		let projectId = this.props.projectId;
		console.log(projectId);
		this.props.deleteProject(projectId);
		this.props.history.push('/');
	}
	render(){	
		if (!this.props.auth.uid) return <Redirect to="/ingresar" />
		if ( this.props.project ){
			return (
				<div className="container section project-detail">
		    	<div className="card z-depth-0">
			    	<div className="card-content">
				    	<div className="row">
				    		{ this.props.project.authorId === this.props.auth.uid
				    		?(
					    		<div className="col s1 push-s11">
					    		<button className="btn-floating btn-small waves-effect waves-dark white " title="Eliminar Proyecto" onClick={this.handleClick}>
					    		<i className="material-icons red-text">close</i>
					    		</button>
					    		</div>
					    	)
					    	: null
				    		}
			    		</div>
			    		<span className="card-title">{ this.props.project.title }</span>
			    		<p> { this.props.project.content } </p>

			    	</div>
			    	<div className="card-action  grey lighten-5 grey-text">
			    		<div>Creado Por : {this.props.project.authorFirstName} {this.props.project.authorLastName}</div>
			    		<div>{moment(this.props.project.createdAt.toDate()).calendar()}</div>
			    	</div>
		    	</div>
		    </div>
	    )
		}else{
			return(
				<div className="conteiner center">
					<p>Cargando Projecto</p>
				</div>
	  	)
		}
	}				

}

const mapStateToProps = (state,ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null 
	return{
		project:project,
		auth: state.firebase.auth,
		projectId:id
	}
}

const mapDispatchToProps = dispatch => {
	return {
		deleteProject: (projectId) => dispatch( deleteProject(projectId) )
	}
}
export default compose(
	connect(mapStateToProps,mapDispatchToProps),
	firestoreConnect([
		{ collection:'projects'}
	])
)(ProjectDetail)