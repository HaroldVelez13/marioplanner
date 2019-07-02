import React, { Component } from "react";
import M from "materialize-css";
import './Modal.css'


class Modal extends Component {
  constructor(props) {
      super(props);
      this.Modal = React.createRef();
  }
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 150,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "100%"
    };
    M.Modal.init(this.Modal, options);
    // If you want to work on instance of the Modal then you can use the below code snippet 
    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }
  handleClick = (e) =>{
    let instance = M.Modal.getInstance(this.Modal);
    instance.open();

  }
  render() {
    return (
      <>
        <a
          className="waves-effect waves-light btn modal-trigger"
          onClick={this.handleClick}
        >
          Modal
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal bottom-sheet"
        >
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#" className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </a>
            <a href="#" className="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;