import React, {Component} from 'react';
import "./card.css";
import "../../../fonts/fonts.css";
import PropTypes from "prop-types";


class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            historyShow: false,
            comments: '',
            names: '',
            comment: '',
            sendComment: {
                nameCom: '',
                contCom: '',
            }
        };
    }

    handleClick = () => {
        this.setState(({count}) => ({
            count: ++count,
        }))
    };

    handleShow = (e) => {
        e.preventDefault();
        this.setState({historyShow: !this.state.historyShow})
    };

    handleName = ({ target: {value} }) => {
        this.setState({
            names: value
        })
    };
    handleComment = (e) => {
        this.setState({
            comment: e.target.value,
        })
    };

    handleSendComment = (e) => {
        e.preventDefault();
        const {names, comment} = this.state;

        this.setState ({
            names: '',
            comment: '',
            sendComment: {
                nameCom: names,
                contCom: comment,
            }
        })
    };



    render() {
        const {name, history, imges} = this.props;
        const {count, historyShow, names, comment, sendComment } = this.state;
        const showElem = {
            'display': historyShow ? 'block' : 'none'
        };
        const {nameCom, contCom} = sendComment;

        return (
            <div className="tc bg-light-green br3 pa3 bw2 shadow-5 my-flex">
                <div className="wrapp-face" onClick={this.handleShow}>
                    <img className="face-hero" src={imges} alt={name}/>
                    <h2>{name}</h2>
                    <button className="button-show" onClick={this.handleShow}>
                        more
                    </button>
                </div>
                <div className="wrapp-history" style={showElem}>
                    <p className="historys">{history}</p>
                    <p className="counts" onClick={this.handleClick}>
                        <img className="imgs" src="https://cdn4.iconfinder.com/data/icons/like-18/32/459-01-512.png" alt="like"/>
                        {count}
                    </p>
                    <div className="comment-block">
                        <label>
                            Name: <input type="text" name="name" value={names} onChange={this.handleName}/>
                        </label>
                        <label htmlFor="">
                            Your comment: <textarea value={comment} name="text" id="text" onChange={this.handleComment}></textarea>
                        </label>
                        <button onClick={this.handleSendComment}>send</button>
                    </div>
                </div>
                <div className="comments">
                    <div>
                        <p>{nameCom}</p>
                        <p>{contCom}</p>
                    </div>

                </div>
            </div>
        )
    };
}


// -- PropTypes ---
Card.propTypes = {
    name: PropTypes.string.isRequired,
    history: PropTypes.string,
    imges: PropTypes.string.isRequired,
    // func: PropTypes.func,
    count: PropTypes.number
};
Card.defaultProps = {
    history: "",
    // func: () => {},
    count: 0,
};


export default Card;

