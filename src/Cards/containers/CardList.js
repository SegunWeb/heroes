import React from 'react';
import Card from "../components/Card";
import "./CardList.css";
import "../../fonts/fonts.css";


const CardList = ({ marvels }) => {

        return (
            <div className="did tc">
                <h1>Heroes marvel</h1>

                {
                    marvels.map((user, i) => {
                        return (
                            <Card
                                key={i}
                                id={marvels[i].id}
                                name={marvels[i].name}
                                imges={marvels[i].imges}
                                history={marvels[i].history}
                            />
                        )
                    })
                }
            </div>
        )
};

export default CardList