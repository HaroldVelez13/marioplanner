import React , { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from '../../config/moment';
import { deleteProject } from '../../store/actions/projectActions';
import  ModalWrapper  from '../modalWrapper/ModalWrapper';

class ProjectDetail extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		closeModal:false
    	}
	    this.handleClick = this.handleClick.bind(this);
	}	
	handleClick = (e) => {		
		e.preventDefault();
		let projectId = this.props.projectId;
		this.props.deleteProject(projectId);
		this.setState({closeModal:true});
	}
	handleClose = () => {
		this.props.history.push('/');
	}
	render(){	
		if (!this.props.auth.uid) return <Redirect to="/ingresar" />
		if ( this.props.project ){
		return (
			<ModalWrapper onClose={this.handleClose} close={this.state.closeModal}>	
		    	<div className="card z-depth-0">
			    	<div className="card-content">
			    		<span className="card-title">{ this.props.project.title }</span>
			    		<p> { this.props.project.content } </p>
			    	</div>
			    	<div className="card-action  grey lighten-5 grey-text">
			    		<div>Creado Por : {this.props.project.authorFirstName} {this.props.project.authorLastName}</div>
			    		<div>{moment(this.props.project.createdAt.toDate()).calendar()}</div>
			    	</div>
			    	{this.props.project.authorId === this.props.auth.uid
		    		?(
			    		<div className="card-action center">
							<button className="btn red lighten-2 z-depth-0" onClick={this.handleClick}>Eliminar</button>					    		
				    	</div>
			    	)
			    	: null
			    	}
			    </div>
			</ModalWrapper>
    	)}else{
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