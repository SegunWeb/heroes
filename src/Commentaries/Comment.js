import React, {Fragment, Component } from 'react';
import './comment.css'


class Comment extends Component{
    constructor() {
        super();

        this.state = {
            name: '',
            comment: '',
            newItem: '',
            newComment: [],

        };
    }

    nameRef = React.createRef();
    commentRef = React.createRef();

    handleComment = () => {
        this.setState({
            name: this.nameRef.current.value,
            comment: this.commentRef.current.value,
        })
    };


    handleSend = () => {

        const newItem= {
            id: 1 + Math.random(),
            valueName: this.nameRef.current.value.slice(),
            valueComment:this.commentRef.current.value.slice(),
        };

        const newComment = [...this.state.newComment];
        newComment.push(newItem);

        this.setState({
            newComment,
            newItem:"",
            name: '',
            comment: '',
        })
    };

    handleDelete = (id) => {
        const newComment = [...this.state.newComment];
        const updateComment = newComment.filter(i => i.id !== id );

        this.setState({newComment: updateComment})
    };



    render() {
        const {name, comment, newComment,} = this.state;
        return (
            <Fragment>
                <div>
                    <label>
                        Name:
                        <input type="text" ref={this.nameRef} value={name} onChange={this.handleComment}/>
                    </label>
                    <label>
                        Comment:
                        <textarea type="text" value={comment} ref={this.commentRef} onChange={this.handleComment}/>
                    </label>
                    <button onClick={this.handleSend}>send</button>
                </div>

                {newComment.map(({id, valueName, valueComment }) => {
                    return (
                        <div className="new-comment" key={id} id={id}>
                            <p>{valueName}</p>
                            <p>{valueComment}</p>
                            <button onClick={() => this.handleDelete(id)}>X</button>
                        </div>
                    )
                })}

            </Fragment>
        )
    }
}

export default Comment;