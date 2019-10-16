import React, {Component} from 'react';
import CardList from './Cards/containers/CardList'
import SearchBox from '../Search/SearchBox'
import { marvel } from '../heroes';

class Marvel extends Component {
    constructor(props){
        super(props);

        this.state = {
            marvel: marvel,
            searchfield: ''
        };
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value});
    };

    render() {
        const {marvel, searchfield} = this.state;
        const filterHeroes = marvel.filter(marvel => {
            return marvel.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return (
            <main>

                <div>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList
                        marvels={filterHeroes}
                    />
                </div>
            </main>
        )
    }
};


export default Marvel;