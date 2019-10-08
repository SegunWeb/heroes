import React, {Component} from 'react';
import CardList from './Cards/containers/CardList'
import SearchBox from '../Search/SearchBox'

import { dc } from '../heroes';

class Dc extends Component {
    constructor(props){
        super(props);

        this.state = {
            dc: dc,
            searchfield: ''
        };
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value});
    };

    render() {
        const {dc, searchfield} = this.state;
        const filterHeroes = dc.filter(dc => {
            return dc.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return (
            <main>
                <div>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList
                        dc={filterHeroes}
                    />
                </div>
            </main>
        )
    }
};


export default Dc;