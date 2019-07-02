import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
import  ModalWrapper  from '../modalWrapper/ModalWrapper';

class CreateProject extends Component{
	constructor(props) {
    	super(props);

    	this.state = {
			title:'',
			content:'',
			closeModal:false
		};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleClose = this.handleClose.bind(this);
	}
	
	handleChange = (e) => {
		this.setState({
			[e.target.id]:e.target.value
		})
	}
	handleSubmit = (e) => {
		this.setState({closeModal:true});
		e.preventDefault();
		this.props.createProject(this.state);
	}
	handleClose = () => {
		this.props.history.push('/');
	}

	render(){
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to="/ingresar" />
		
		return  (
			<ModalWrapper onClose={this.handleClose} close={this.state.closeModal}>
				<>
					<form onSubmit={this.handleSubmit} className="white z-depth-0">
						<h5 className="grey-text text-darken-3">Crear Nuevo Proyecto</h5>
						<div className="input-field">
							<label htmlFor="title">Titulo</label>
							<input type="text" id="title" onChange={this.handleChange}></input>
						</div>
						<div className="input-field">
							<label htmlFor="content">Contenido</label>
							<textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
						</div>
						<div className="input-field center">
							<button className="btn teal lighten-1 z-depth-0">Crear</button>
						</div>
					</form>
				</>
			</ModalWrapper>
		) 
	}

}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createProject: (project) => dispatch( createProject(project) )
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)