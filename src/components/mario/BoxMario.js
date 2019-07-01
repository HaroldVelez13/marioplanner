import React, {Component} from 'react';
import './mario.css';

class BoxMario extends Component {
  constructor(props) {
      super(props);

      this.state = {
        coinClass:''
      }
 
      this.coin = "http://bosssss.com/mario/coin.gif";
      this.coinsound = React.createRef();
      this.audio = "http://bosssss.com/mario/coinsound.mp3";

      this.handledClick = this.handledClick.bind(this);
      this.addClass = this.addClass.bind(this);
      this.removeClass = this.removeClass.bind(this);
  }
  sleep = (ms) => {
    return new Promise( () => {

      setTimeout(() => {
        this.removeClass();
      }, ms);
    })

  }
  addClass = () => {
    this.setState({
      coinClass:'active'
    });
  }

  removeClass = () => {
    this.setState({
      coinClass:''
    });
  }  
  async handledClick(e) {
      e.preventDefault(); 

      this.addClass();
      this.coinsound.current.play(); 
      await this.sleep(1500);
         
  }
  render(){
    return (
      <div className="size" onClick={this.handledClick}>
        <button id="mario">
          <img src={this.coin} id="coin" alt="BoxMario" className={this.state.coinClass}/>
          <audio id="coinsound" ref={this.coinsound} src={this.audio}>
          </audio>
        </button>
      </div>
    );
  }
}

export default BoxMario;