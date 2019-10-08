import React, {Component} from 'react';



class Posts extends Component {
    constructor(){
        super();

        this.state = {
            robots: [],
        }
    }


    render() {
        const {robots } = this.state;

        return (
                <div className="tc">
                    <h1>{robots}</h1>
                </div>
            )
    }
}

export default Posts;