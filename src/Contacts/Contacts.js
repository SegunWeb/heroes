import React, {Component} from 'react';

import "./contacts.css"


const TABS_CITY = [
    {
        id: 1,
        value: "New York",
        title: 'New York',
    },
    {
        id: 2,
        value: "Chicago",
        title: 'Chicago',
    },
    {
        id: 3,
        value: "another city",
        title: 'another city',
    }
];


class Contacts extends Component {
    constructor(){
        super();

        this.state = {
            nameText: '',
            textareaText: '',
            selectCity: TABS_CITY[0].value,
        }
    }

    handleNameChange = (e) => {
        this.setState({
            nameText: e.target.value,
        })
    };
    handleTextareaChange = ({ target: {value} }) => {
        this.setState({
            textareaText: value,
        })
    };
    handleCityChange = ({ target: {value} }) => {
        this.setState({
            selectCity: value,
        })
    };

    handleSub = (e) => {
        e.preventDefault();
        const {nameText, textareaText, selectCity} = this.state;
        alert(`${nameText}, ${selectCity}, ${textareaText}`)
    };

    render() {
        const {nameText, selectCity, textareaText } = this.state;

        return (
            <main>
                <h1>Contacts</h1>
                <div className="info">
                    <p>Info</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magnam molestias rerum tempore! Accusamus commodi in omnis, vel veritatis voluptatum?</p>
                </div>
                <form onSubmit={this.handleSub} className="forms">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={nameText}
                            pleaceholder="Your name"
                            onChange={this.handleNameChange}
                        />
                    </label>
                    <select value={selectCity} name="city" id="city" onChange={this.handleCityChange}>
                        {TABS_CITY.map(({ id, value, title }) => (
                            <option
                                key={`${id}-${value}`}
                                value={value}
                            >{title}</option>
                            ))}
                    </select>
                    <label >
                        Text:
                        <textarea
                            name="text"
                            id="text"
                            value={textareaText}
                            pleaceholder="Your message"
                            onChange={this.handleTextareaChange}
                        >
                        </textarea>
                    </label>
                    <button>submit</button>
                </form>
            </main>
        )
    }
}

export default Contacts;