import React, {Component} from 'react';
import './PostMessages.css';
import InputBlocks from "../InputBlocks/InputBlocks";
import {connect} from "react-redux";
import Messages from "../GetMessages/Messages";
import {postRequireMessage} from "../../Store/actionOrder";

class PostMessages extends Component {
  state = {
    message: '',
    author: '',
  };

  inputValueChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  };

  sendMessage = () =>{
    const message = {
      author: this.state.author,
      message: this.state.message
    };
    this.props.postMessage(message)
  };
  render() {
    return (
      <div className="block">
        <div className="entryField">
          <div>
            <InputBlocks
                onChangeAuthor={(event)=> this.inputValueChange(event)}
                onChangeMessage={(event)=>this.inputValueChange(event)}
                onClick={()=>this.sendMessage()}
            />
          </div>
          {this.props.err && <p className="err">{this.props.err}</p>}
        </div>
        <div>
          <Messages/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  err: state.err
});
const mapDispatchToProps = dispatch => ({
  postMessage: (message)=> dispatch(postRequireMessage(message))
});
export default connect(mapStateToProps, mapDispatchToProps)(PostMessages);