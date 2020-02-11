import React, {Component, Fragment} from 'react';
import './Messages.css'
import {connect} from "react-redux";
import {getAllMessage, getMessageDateTime} from "../../Store/actionOrder";


class Messages extends Component {
    interval = null;
    date = null;

        componentDidMount() {
           setInterval(this.getMessages,2000 )
        }

    getMessages = async (datetime) => {
        if (datetime === null || datetime === undefined) {
            await this.props.getAllMessage()
        } else {
            await this.props.getMessageDateTime(this.lastDateTime)
        }
        let messages = this.props.messages;
        this.lastDateTime = messages[messages.length - 1].datetime;
    };




    render() {
        return (
            <Fragment>
                {this.props.loading ?
                    <div className="postsBlock" >
                        {this.props.messages ? this.props.messages.map(message =>
                            <div key={message.id}>
                                <div className="postHeader" >
                                    <h5>{message.author}</h5>
                                    <p className='date'>{message.dateTime}</p>
                                </div>
                                <p className="message">{message.message}</p>
                            </div>
                        ): null}
                    </div> :<div>...Loading</div>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    messages : state.messages,
    loading: state.loading
});
const mapDispatchToProps = dispatch => ({
    getAllMessage : () => dispatch(getAllMessage()),
    getMessageDateTime: (date)=> dispatch(getMessageDateTime(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);