import React, { Component } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import './ModalWrapper.css'

class ModalWrapper extends Component {
	constructor(props) {
      super(props);
      this.Modal = React.createRef();
	  }
	  componentDidMount() {
	    const options = {
	      onOpenStart: () => {
	        //console.log("Open Start");
	      },
	      onOpenEnd: () => {
	        //console.log("Open End");
	      },
	      onCloseStart: () => {
	        //console.log("Close Start");
	      },
	      onCloseEnd: () => {	      	
	      	this.props.onClose()
	        //console.log("Close End");
	      },
	      inDuration: 250,
	      outDuration: 250,
	      opacity: 0.5,
	      dismissible: true,
	      startingTop: "10%",
	      endingTop: "10%"
	    };
	    M.Modal.init(this.Modal, options);
	    // If you want to work on instance of the Modal then you can use the below code snippet 
	    this.instance = M.Modal.getInstance(this.Modal);
	    this.instance.open();
	    // instance.close();
	    // instance.destroy();
	}

  render() {
    const  content  = this.props.children;
    if  (this.props.close){this.instance.close()};
    return (      
		<div ref={Modal => { this.Modal = Modal }} className="modal white">		
          <div className="modal-content">
	          <a className="modal-close right btn-floating btn-small grey">
	          	<i className="material-icons">close</i>
	          </a>            
	          <div className="children">{content}</div>
          </div>          
      </div>  
    )
  }
}

export default ModalWrapper;