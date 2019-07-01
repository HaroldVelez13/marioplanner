import React from 'react';
import moment from '../../config/moment';
import fungus from '../../fungus.gif';

const Notifications = (props) => {
	const {notifications} = props;
	return(
		<div className="section toggle-base">
			<div className="card zdepth-0">
				<div className="card-content">
					<span className="card-title">Notificaciones</span>
					<ul className="collection ">
					{notifications && notifications.map((item)=>{
						return (
							<li className="collection-item avatar toggle-enter"  key={item.id}>
								<img src={fungus} alt="Hongo" className="circle"/>					
								<span className="pink-text">{item.user}</span>
								<span> {item.content}</span>
								<div className="grey-text note-date">
									{moment(item.time.toDate()).fromNow()}
								</div>									
							</li>						    
						)
					})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Notifications
