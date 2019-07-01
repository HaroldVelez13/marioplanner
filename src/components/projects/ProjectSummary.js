import React from 'react';
import moment from '../../config/moment';
import luigi from '../../luigi.gif';

const ProjectSummary = ({project}) => {
	return(
		<div className="card z-depth-0 project-summary toggle-base">		
	      	<div className="card-content grey-text text-darken-3 toggle-enter">
				<div className="row valign-wrapper">
				    <div className="col s2">	      
			            <img src={luigi} alt="Cara de Luigi" className="circle responsive-img" />
			        </div>
			        <div className="col s10">
			            <span className="card-title">{project.title}</span>
				        <p>Creado: {moment(project.createdAt.toDate()).calendar()}</p>
			        </div> 
	      		</div>
	      	</div>
	    </div>
	)
}

export default ProjectSummary