import React from 'react';
import Card from "../components/Card";
import "./cardList.css";
import "../../../fonts/fonts.css";


const CardList = ({ marvels }) => {

        return (
            <div className="did tc">
                <h1>Heroes marvel</h1>

                {
                    marvels.map(({id, name, imges, history}) => {
                        return (
                            <Card
                                key={`${id}-${name}`}
                                id={id}
                                name={name}
                                imges={imges}
                                history={history}
                            />
                        )
                    })
                }
            </div>
        )
};

export default CardList